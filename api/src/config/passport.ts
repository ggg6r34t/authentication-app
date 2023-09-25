import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

import {
  findOrCreateUserService,
  findUserByEmailService,
} from "../services/users";
import { UnauthorizedError } from "../helpers/apiError";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_APP_ID as string;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_APP_SECRET as string;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID as string;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET as string;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },

  async (payload, done) => {
    try {
      const userEmail = payload.email;
      const foundUser = await findUserByEmailService(userEmail);

      if (!foundUser) {
        throw new UnauthorizedError("User not found.");
      }
      done(null, foundUser);
    } catch (error) {
      // handles and logs error properly
      console.error("JWT Strategy Error", error);
      done(error, false);
    }
  }
);

export const facebookStrategy = new FacebookStrategy(
  {
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/account/auth/facebook/callback",
  },

  async (accessToken, refreshToken, profile, done) => {
    try {
      const userPayload = {
        name: profile?.username,
        // email: profile?.emails[0],
      };

      // if the user doesn't exist, create a new user
      const user = await findOrCreateUserService(userPayload);

      done(null, user);
    } catch (error) {
      console.error("Facebook Strategy Error:", error);
      done(error, false);
    }
  }
);

export const githubStrategy = new GitHubStrategy(
  {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/account/auth/github/callback",
  },
  async (_: any, __: any, profile: any, done: any) => {
    try {
      // create a payload object with relevant data
      const userPayload = {
        name: profile?.displayName,
        email: profile?.email,
      };

      // use the findOrCreateUserService function
      const user = await findOrCreateUserService(userPayload);

      return done(null, user);
    } catch (error) {
      console.error("GitHub Strategy Error", error);
      done(error, false);
    }
  }
);

export const googleStrategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/account/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email =
        profile.emails && profile.emails.length > 0
          ? profile.emails[0].value
          : undefined;

      if (!email) {
        return done(
          new Error("No email found in the Google profile") as Error,
          false
        );
      }

      const userPayload = {
        googleId: profile.id,
        name: profile.displayName,
        email,
      };

      // if the user doesn't exist, create a new user
      const user = await findOrCreateUserService(userPayload);

      return done(null, user);
    } catch (error) {
      console.error("Google Strategy Error", error);
      return done(error as Error, false);
    }
  }
);
