import express, { Express } from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import {
  facebookStrategy,
  githubStrategy,
  googleStrategy,
  jwtStrategy,
} from "./config/passport";
import apiErrorHandler from "./middlewares/apiErrorHandler";
import userRouter from "./routes/users";
import User from "./models/User";

const app: Express = express();
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // false while using localhost (not secured)
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(jwtStrategy);
passport.use(facebookStrategy);
passport.use(githubStrategy);
passport.use(googleStrategy);

// serialize user into the session
passport.serializeUser((user: any, done) => {
  done(null, user?._id);
});

// deserialize user from the session
passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      return done(null, false);
    }

    done(null, user); // user found and deserialized
  } catch (error) {
    done(error, false);
  }
});

// routes
app.use("/account", userRouter);

// error handler
app.use(apiErrorHandler);

export default app;
