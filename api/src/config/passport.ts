import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

import { findUserByEmailService } from "../services/users";
import { UnauthorizedError } from "../helpers/apiError";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

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

// export const facebookStrategy = new FacebookStrategy({
//   clientID: FACEBOOK_APP_ID,
//   clientSecret: FACEBOOK_APP_SECRET,
//   callbackURL: "http://localhost:3000/auth/facebook/callback",
//   profileFields: ["id", "displayName", "email"]
// }

// async (accessToken, refreshToken, profile, done) => {
//   try {
//     const facebookId = profile.id;
//     cosnt foundUser = await findOrCreateUserByFacebookId(facebookId)

//     if (!foundUser) {
//       throw new UnauthorizedError("User not found.")
//     }

//     done(null, foundUser);
//   } catch (error) {
//     console.error("Facebook Strategy Error:", error)
//     done(error, false)
//   }
// }
// )
