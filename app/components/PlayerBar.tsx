"use client";

import { useRef, useEffect, Dispatch, SetStateAction } from "react";

function PlayerBar({
  position = "bottom",
  time,
  setTime,
}: {
  position: "bottom" | "full";
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="h-full bg-slate-600 grid-footer flex justify-center items-center gap-4 select-none">
      <div>Teste</div>
      <Seeker time={time} setTime={setTime} />
      <div className="w-8">{((time / 800) * 120).toFixed(2)}</div>
    </div>
  );
}

function Seeker({
  time,
  setTime,
}: {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}) {
  const seekerPressedPositiion = useRef<number>(0);
  const seekerPressed = useRef(false);
  const seekerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    seekerRef.current?.addEventListener("mousedown", (e) => {
      seekerPressed.current = true;
      seekerPressedPositiion.current = e.pageX;
      console.log("Seeker pressed", e.pageX);
    });

    document.addEventListener("mousemove", (e) => {
      if (!seekerPressed.current) return;

      setTime(e.pageX - seekerPressedPositiion.current);
    });

    document.addEventListener("mouseup", () => {
      seekerPressed.current = false;
    });
  }, []);

  return (
    <div className="seeker-track w-[800px] h-1 bg-white/50 select-none">
      <div className="seeker-elapsed"></div>
      <div
        className="relative seeker-bullet w-4 h-4 rounded-full bg-white cursor-pointer"
        draggable={false}
        ref={seekerRef}
        style={{
          left: time < 0 ? 0 : time >= 800 ? 800 : time + "px",
        }}
      ></div>
    </div>
  );
}

export default PlayerBar;
