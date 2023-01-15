"use client";

import React, { PropsWithChildren } from "react";
import "../styles/globals.css";
import NavigationList from "./components/NavigationList";
import PlayerBar from "./components/PlayerBar";
import AppProvider from "./contexts/AppContext";
import { useState } from "react";
import CurrentSection from "./components/CurrentSection";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [time, setTime] = useState<number>(0);

  return (
    <html>
      <head>
        <title>Teste 123</title>
      </head>
      <body>
        <main className="app-grid bg-slate-900 text-white overflow-hidden">
          <AppProvider>
            <NavigationList />
            <CurrentSection>{children}</CurrentSection>
            <PlayerBar position="bottom" time={time} setTime={setTime} />
          </AppProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
