"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Artists from "./components/Artists";
import CurrentSection from "./components/CurrentSection";
import NavigationList from "./components/NavigationList";
import PlayerBar from "./components/PlayerBar";
import AppProvider from "./contexts/AppContext";

export default function RootPage() {
  const [time, setTime] = useState(0);
  return (
    <main className="app-grid bg-slate-900 text-white overflow-hidden">
      <AppProvider>
        <NavigationList />
        <CurrentSection section={<Artists />} />
        <PlayerBar position="bottom" time={time} setTime={setTime} />
      </AppProvider>
    </main>
  );
}
