"use client";

import { MouseEventHandler, useContext, useEffect } from "react";
import { FiPlayCircle, FiPause } from "react-icons/fi";
import { AppContext } from "../contexts/AppContext";
import type { Track } from "../data/tracks";
import PictureWithLoader from "./PictureWithLoader";

function secondsToMinutes(duration: number) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return { minutes, seconds };
}

export default function TrackCard({
  track,
  index,
}: {
  track: Track;
  index: number;
}) {
  const { minutes, seconds } = secondsToMinutes(track.duration);

  const { currentTrack, setCurrentTrack } = useContext(AppContext);

  useEffect(() => {
    console.log(currentTrack.track?.title + " is on!");
  }, [currentTrack]);

  function handleButtonClick() {
    console.log(track.title + " clicked");
    if (currentTrack.track?.id === track?.id) {
      setCurrentTrack((item) => {
        return { ...item, status: !currentTrack.status };
      });
    } else {
      setCurrentTrack((item) => {
        return { ...item, track, status: true };
      });
    }
  }

  return (
    <figure
      className="inline-block mr-8 mb-8 cursor-pointer relative spring-into-view"
      style={{ animationDelay: index * 50 + "ms" }}
    >
      <div className="h-40 aspect-square relative block">
        <PictureWithLoader imageSrc={"./assets/tracks/recent/" + track.image} />
        <PlayButton
          onClick={handleButtonClick}
          isPaused={currentTrack.track === track}
        />
      </div>
      <figcaption>
        <p className="font-bold text-black/70">{track.title}</p>
        <p className="text-black/50 text-sm">{minutes + ":" + seconds}</p>
      </figcaption>
    </figure>
  );
}

const PlayButton = ({
  position = "absolute",
  onClick,
  isPaused,
}: {
  position?: "absolute" | "relative";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isPaused: boolean;
}) => {
  const className = `play-overlay | ${position} inset-0 z-10 text-2xl text-white bg-black/50 grid place-items-center opacity-0 hover:opacity-100 transition-opacity`;

  return (
    <button className={className} onClick={onClick}>
      {isPaused ? (
        <FiPause size={80} color="white" strokeWidth={1} />
      ) : (
        <FiPlayCircle size={80} color="white" strokeWidth={1} />
      )}
    </button>
  );
};
