import type { NextApiRequest, NextApiResponse } from "next";
import artists from "../../lib/data/artists.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(artists);
}
