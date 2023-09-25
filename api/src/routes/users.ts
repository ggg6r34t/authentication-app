import { Router } from "express";
import passport from "passport";

import {
  getUserById,
  createUser,
  updateUserInfo,
  userLogin,
  googleAuthenticate,
} from "../controllers/users";

const router = Router();
const CLIENT_URL = "http://localhost:3000/account";

// get user
router.get("/:id", getUserById);

// facebook user
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["profile", "email"] })
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/",
  })
);

// github user
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/",
  })
);

// google user
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/",
  }),
  googleAuthenticate
);

// create account or register
router.post("/register", createUser);

// user login
router.post("/login", userLogin);

// update account information after successful login
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserInfo
);

export default router;
