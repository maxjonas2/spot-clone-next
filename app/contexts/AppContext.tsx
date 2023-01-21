"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import Track from "../../lib/classes/Track";
import type { ITrack } from "../data/tracks";
import { print } from "../utils";
import tracks from "../data/tracks";

export type CurrentTrackInfo = {
  track: ITrack | null;
  status: boolean;
  trackTimestamp: number;
};

const initialValue: CurrentTrackInfo = {
  track: null,
  status: false,
  trackTimestamp: 0,
};

export const AppContext = createContext<{
  currentTrack: CurrentTrackInfo;
  setCurrentTrack: Dispatch<SetStateAction<CurrentTrackInfo>>;
}>({
  currentTrack: initialValue,
  setCurrentTrack: () => {},
});

function getInitialTrack(): CurrentTrackInfo {
  return { track: tracks[0], status: false, trackTimestamp: 0 };
}

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] =
    useState<CurrentTrackInfo>(getInitialTrack);

  useEffect(() => {
    console.log(currentTrack);
  }, [currentTrack]);

  const ctxValue = { currentTrack, setCurrentTrack };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
