import type { NextApiRequest, NextApiResponse } from "next";
import { createWriteStream, WriteStream } from "fs";
import https, { IncomingMessage } from "http";
import { Stream } from "stream";

export default function handler(_: NextApiRequest, response: NextApiResponse) {
  let chunk = "";

  https.get(
    "http://storage.googleapis.com/spot-clone-songs/generic-song-2.mp3",
    (res: IncomingMessage) => {
      res.on("data", (data: Buffer) => {
        chunk += data;
      });
      res.on("end", () => {
        response.setHeader("Content-Type", "audio/mpeg");
        response.status(200).send(chunk);
      });
    }
  );
}
