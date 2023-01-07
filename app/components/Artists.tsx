"use client";

import {
  createContext,
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getArtists } from "../utils";
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";

export type Artist = {
  id: number;
  name: string;
  image: string;
  category: string;
};

export const ArtistContext = createContext<{
  selectedArtist: Artist | null;
  setSelectedArtist: Dispatch<SetStateAction<Artist | null>>;
}>({ selectedArtist: null, setSelectedArtist: () => {} });

export default () => {
  const [artistList, setArtistList] = useState<Artist[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  useEffect(() => {
    getArtists().then((data) => setArtistList(data as Artist[]));
  }, []);

  function getTranslateString() {
    if (selectedArtist) {
      return `translateY(0)`;
    } else {
      return `translateY(100vh)`;
    }
  }

  return (
    <Fragment>
      <ArtistContext.Provider value={{ selectedArtist, setSelectedArtist }}>
        <div className="relative h-full ">
          <div className="pl-4">
            <h4 className="text-lg text-orange-500 font-bold">Artists</h4>
            <h2 className="text-xl">Trending Now</h2>
          </div>
          <div className="p-4">
            {artistList.length === 0 ? null : (
              <ArtistList artists={artistList.slice(0, 4)} />
            )}
          </div>
          <div
            className="artist-info absolute inset-0 top-60 p-4 bg-white rounded-t-xl transition-all duration-[400ms]"
            style={{ transform: getTranslateString() }}
          >
            {/* <h3 className="text-2xl text-orange-500">{selectedArtist?.name}</h3> */}
            <div>
              {selectedArtist && <TrackList artistId={selectedArtist.id} />}
            </div>
          </div>
        </div>
      </ArtistContext.Provider>
    </Fragment>
  );
};

function debouncer(fn: Function, time: number = 400) {
  let lastExec = performance.now();

  return () => {
    if (performance.now() - lastExec > time) fn();
    lastExec = performance.now();
  };
}
