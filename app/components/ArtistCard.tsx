"use client";

import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import type { Artist } from "./Artists";
import { ArtistContext } from "./Artists";

export default function ArtistCard({ artist }: { artist: Artist }) {
  const { selectedArtist, setSelectedArtist } = useContext(ArtistContext);

  const artistCardRef = useRef<HTMLElement>(null);
  const position = useRef<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    setCardPositions();

    window.addEventListener("resize", setCardPositions);

    return () => window.removeEventListener("resize", setCardPositions);
  });

  function setCardPositions() {
    position.current.top = artistCardRef.current!.offsetTop;
    position.current.left = artistCardRef.current!.offsetLeft;
  }

  function getTranslateString() {
    return `translate(${position.current.left * -1 + 16}px, ${
      position.current.top * -1 + 8
    }px)`;
  }

  function getStyle() {
    let transform =
      selectedArtist?.id === artist.id
        ? getTranslateString()
        : selectedArtist
        ? "translate(0) scale(0.2)"
        : "translate(0) scale(1)";

    let opacity = selectedArtist && selectedArtist.id !== artist.id ? 0 : 1;

    return {
      transform,
      opacity,
    };
  }

  function getArtistInfoStyle() {
    let transitionDelay = "200ms";
    const translate =
      selectedArtist && selectedArtist.id == artist.id ? 0 : -150;
    const opacity = selectedArtist && selectedArtist.id == artist.id ? 1 : 0;

    return {
      transform: `translateX(${translate}px)`,
      opacity,
      transitionDelay,
    };
  }

  return (
    <figure
      className="artist-figure inline-block mr-8 mb-8 cursor-pointer relative transition-all duration-500 scale-100"
      ref={artistCardRef}
      onClick={() => setSelectedArtist(!selectedArtist ? artist : null)}
      style={getStyle()}
    >
      <picture className="z-20 relative">
        <Image
          className="w-[48] aspect-square object-cover object-center rounded-t-[.5rem] "
          width={192}
          height={192}
          src={"http://localhost:3000/assets/" + artist.image}
          alt="Artist picture"
        />
      </picture>
      <figcaption className="w-full text-center bg-slate-500 rounded-b-[.5rem] p-2">
        <p className="font-bold">{artist.name}</p>
        <p>{artist.category}</p>
      </figcaption>
      <div
        className="absolute top-0 left-52 w-max z-10 transition-all duration-500"
        style={getArtistInfoStyle()}
      >
        <p className="text-2xl">{artist.name}</p>
        <p className="text-lg">{artist.category}</p>
      </div>
    </figure>
  );
}
