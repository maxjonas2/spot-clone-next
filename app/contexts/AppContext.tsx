"use client";

import { createContext, ReactNode, useReducer } from "react";
import type { ITrack } from "../data/tracks";
import tracks from "../data/tracks";
import { getTrackById } from "../utils";

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

function audioControllerReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_TRACK":
      const newTrack = getTrackById(action.payload.id);
      const newCurrentTrack = { ...state, track: newTrack };
      return newCurrentTrack;
  }
}

export const AppContext = createContext<any>(null);

function getInitialTrack(): CurrentTrackInfo {
  return { track: tracks[0], status: false, trackTimestamp: 0 };
}

const AppProvider = ({ children }: { children: ReactNode }) => {
  // const [currentTrack, setCurrentTrack] =
  //   useState<CurrentTrackInfo>(getInitialTrack);

  const [state, dispatch] = useReducer(
    audioControllerReducer,
    getInitialTrack()
  );

  // useEffect(() => {
  //   console.log(currentTrack);
  // }, [currentTrack]);

  const ctxValue = { state, dispatch };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
