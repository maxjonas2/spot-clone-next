import ArtistCard from "./ArtistCard";
import type { Artist } from "./Artists";

export default function ArtistList({ artists }: { artists: Artist[] }) {
  return (
    <>
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </>
  );
}
