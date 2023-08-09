import express, { Express } from "express";
import cors from "cors";
import passport from "passport";

import { jwtStrategy } from "./config/passport";
import apiErrorHandler from "./middlewares/apiErrorHandler";
import userRouter from "./routes/users";

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);

// routes
app.use("/account", userRouter);

// error handler
app.use(apiErrorHandler);

export default app;
