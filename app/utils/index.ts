import artists from "../data/artists.json";
import tracks, { ITrack } from "../data/tracks";

export function getArtists() {
  return new Promise((resolve) => setTimeout(() => resolve(artists), 0));
}

export function getTracksByArtistId(id: number): Promise<ITrack[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(tracks[id].recent), 0)
  );
}

export function getTrackById(id: number) {
  const track = Object.entries(tracks)
    .map((item) => item[1].recent)
    .flat()
    .find((t) => t.id === id);
  return track;
}

export function print(message: string, printFn: Function = console.log) {
  printFn(message);
}

export function hashTrack(artistId: number, trackId: number) {
  return parseInt(artistId.toString() + trackId.toString());
}
