"use client";

import { useEffect, useState } from "react";
import { getTracksByArtistId } from "../utils";
import TrackCard from "./TrackCard";

import type { ITrack } from "../data/tracks";

export default function ({ artistId }: { artistId: number }) {
  const [tracklist, setTracklist] = useState<ITrack[]>([]);

  useEffect(() => {
    getTracksByArtistId(artistId).then((data) => setTracklist(data));
  }, []);

  return (
    <div className="text-black" style={{ transform: `translateY(${-96}px)` }}>
      {tracklist.length !== 0 ? (
        tracklist.map((track, index) => (
          <TrackCard key={track.id} track={track} index={index} />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
