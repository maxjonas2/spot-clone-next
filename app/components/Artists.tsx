"use client";

import {
  createContext,
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
  useRef,
} from "react";
import useSwr from "swr";
import { baseUrl, fetcher, getArtists } from "../utils";
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
  // const [artistList, setArtistList] = useState<Artist[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [artistContainerHeight, setArtistContainerHeight] = useState(32);

  const artistsContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   getArtists().then((data) => setArtistList(data as Artist[]));
  // }, []);

  const { data, error, isLoading } = useSwr(baseUrl + "/api/artists", fetcher);

  useEffect(() => {
    setArtistContainerHeight(artistsContainerRef.current!.offsetHeight);
  }, [data]);

  function getTranslateString() {
    if (selectedArtist) {
      return `translateY(0)`;
    } else {
      return `translateY(100vh)`;
    }
  }

  function renderContent() {
    if (isLoading) {
      return <div>Loading</div>;
    } else if (error) {
      return <div>There was an error</div>;
    } else {
      return <ArtistList artists={data} />;
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
          <div className="artists-container p-4" ref={artistsContainerRef}>
            {renderContent()}
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
