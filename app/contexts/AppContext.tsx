"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Track } from "../data/tracks";

type CurrentTrackInfo = {
  track: Track | null;
  status: "paused" | "playing";
  trackTimestamp: number;
};

const initialValue: CurrentTrackInfo = {
  track: null,
  status: "paused",
  trackTimestamp: 0,
};

export const AppContext = createContext<{
  currentTrack: CurrentTrackInfo;
  setCurrentTrack: Dispatch<SetStateAction<CurrentTrackInfo>>;
}>({
  currentTrack: initialValue,
  setCurrentTrack: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<CurrentTrackInfo>({
    track: null,
    status: "paused",
    trackTimestamp: 0,
  });

  const ctxValue = { currentTrack, setCurrentTrack };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
