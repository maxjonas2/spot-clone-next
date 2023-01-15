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
  trackInstance: Track | undefined;
}>({
  currentTrack: initialValue,
  setCurrentTrack: () => {},
  trackInstance: undefined,
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<CurrentTrackInfo>({
    track: null,
    status: false,
    trackTimestamp: 0,
  });

  const [trackInstance, setTrackInstance] = useState<Track | undefined>();

  useEffect(() => {
    setTrackInstance(new Track(setCurrentTrack));
  }, []);

  useEffect(() => {
    if (currentTrack.status === true) {
      trackInstance?.play();
    } else {
      trackInstance?.pause();
    }
  }, [currentTrack.status]);

  const ctxValue = { currentTrack, setCurrentTrack, trackInstance };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
