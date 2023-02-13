import { NextApiRequest, NextApiResponse } from "next";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const authOptions = {
  clientID: config.CLIENT_ID as string,
  clientSecret: config.CLIENT_SECRET as string,
  callbackURL: "http://localhost:3000/google/callback",
};

function verifyCallback(
  accessToken: any,
  refreshToken: any,
  profile: any,
  done: any
) {
  console.log({ accessToken, refreshToken, profile, done });
  done(null, profile);
}

passport.use(new Strategy(authOptions, verifyCallback));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  passport.authenticate("google", { scope: ["profile"] });
  res.status(200).end("ok");
}
