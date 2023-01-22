import artists from "../data/artists.json";
import tracks, { ITrack } from "../data/tracks";

export function getArtists() {
  return new Promise((resolve) => setTimeout(() => resolve(artists), 0));
}

export function getTracksByArtistId(id: number): Promise<ITrack[]> {
  const tracklist = tracks;
  return new Promise((resolve) => setTimeout(() => resolve(tracklist), 0));
}

export function getTrackById(id: number) {
  const track = tracks.find((t) => t.id === id);
  return track;
}

export function print(message: string, printFn: Function = console.log) {
  printFn(message);
}

export function hashTrack(artistId: number, trackId: number) {
  return parseInt(artistId.toString() + trackId.toString());
}
