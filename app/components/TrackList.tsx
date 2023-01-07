"use client";

import { useEffect, useState } from "react";
import { Track } from "../data/tracks";
import { getTracksByArtistId } from "../utils";
import TrackCard from "./TrackCard";

export default function ({ artistId }: { artistId: number }) {
  const [tracklist, setTracklist] = useState<Track[]>([]);

  useEffect(() => {
    console.log("Tracklist mounted");
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
