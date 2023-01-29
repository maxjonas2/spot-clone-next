import Link from "next/link";

export default () => (
  <nav className="side-nav flow-large border-r border-white pl-4 pt-4 fixed">
    <ul className="flow">
      <h3 className="uppercase font-bold title">Library</h3>
      <li>
        <a href="">Playlists</a>
      </li>
      <li>
        <Link href="/artists">Artists</Link>
      </li>
      <li>
        <a href="">Albums</a>
      </li>
      <li>
        <a href="">Songs</a>
      </li>
    </ul>
    <ul className="flow">
      <h3 className="uppercase font-bold title">Discover</h3>
      <li>
        <a href="">Store</a>
      </li>
      <li>
        <a href="">Radio</a>
      </li>
      <li>
        <a href="">For You</a>
      </li>
      <li>
        <Link href="/browse">Browse</Link>
      </li>
    </ul>
  </nav>
);
