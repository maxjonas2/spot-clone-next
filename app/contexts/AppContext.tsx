"use client";

import { createContext, ReactNode, useEffect, useReducer, useRef } from "react";
import type { ITrack } from "../data/tracks";
import tracks from "../data/tracks";
import { getTrackById } from "../utils";

export type CurrentTrackInfo = {
  track: ITrack | undefined;
  status: boolean;
  trackTimestamp: number;
};

export type ControllerReducerActionTypes = "CHANGE_TRACK" | "PLAY" | "PAUSE";

export type ControllerReducerAction = {
  type: ControllerReducerActionTypes;
  payload: any;
};

function audioControllerReducer(
  state: CurrentTrackInfo,
  action: ControllerReducerAction
): CurrentTrackInfo {
  switch (action.type) {
    case "CHANGE_TRACK":
      const newTrack = getTrackById(action.payload.id);
      const newCurrentTrack = { ...state, status: true, track: newTrack };
      return newCurrentTrack;
    case "PAUSE":
      return { ...state, status: false };
    case "PLAY":
      return { ...state, status: true };
    default:
      return getInitialTrack();
  }
}

export const AppContext = createContext<any>(null);

function getInitialTrack(): CurrentTrackInfo {
  return { track: tracks[1].recent[0], status: false, trackTimestamp: 0 };
}

const AppProvider = ({ children }: { children: ReactNode }) => {
  const currentTrack = useRef<CurrentTrackInfo>(getInitialTrack()).current;

  const [state, dispatch] = useReducer(
    audioControllerReducer,
    getInitialTrack()
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const a = audioRef.current;
    a.pause();
    a.src = "./songs/" + state.track?.src;
    a.play();
  }, [state.track]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (state.status) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [state.status]);

  const ctxValue = { state, dispatch };

  return (
    <AppContext.Provider value={ctxValue}>
      <>
        <audio controls={false} ref={audioRef}></audio>
        {children}
      </>
    </AppContext.Provider>
  );
};

export default AppProvider;
