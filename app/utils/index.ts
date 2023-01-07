import artists from "../data/artists.json";
import tracks, { Track } from "../data/tracks";

export function getArtists() {
  return new Promise((resolve) => setTimeout(() => resolve(artists), 0));
}

export function getTracksByArtistId(id: number): Promise<Track[]> {
  const tracklist = tracks[id].recent;
  return new Promise((resolve) => setTimeout(() => resolve(tracklist), 0));
}
