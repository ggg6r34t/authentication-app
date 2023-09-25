import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User, { UserDocument } from "../models/User";
import {
  createUserService,
  findUserByEmailService,
  getUserByIdservice,
  updateUserInfoByIdService,
} from "../services/users";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../helpers/apiError";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
const EXPIRATION_TIME = "1h";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // destructing request.body
  const { name, email, password } = req.body;

  try {
    // hashed password
    const hashedPassword = await generateHashedPassword(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // response to frontend
    const createdUser = await createUserService(newUser);
    res
      .status(201)
      .json({ message: `Account for ${createdUser.email} created.` });
  } catch (error) {
    next(error);
  }
};

async function generateHashedPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // destructing request.body
  const { email, password } = req.body;

  // response to frontend
  // find user by email

  try {
    const userData = await findUserByEmailService(email);
    if (!userData) {
      res.status(403).json({ message: "User not found with this email" });
      return;
    }

    // verify user password
    const hashedPassword = userData.password;

    // verify that password and hashedPassword are valid
    if (!password || !hashedPassword) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);

    if (!isCorrectPassword) {
      throw new UnauthorizedError("Invalid credentials");
    }

    // update lastlogin timestamp
    userData.lastLogin = new Date();
    await userData.save();

    const token = generateJwtToken(userData);
    res.json({ userData, token, isCorrectPassword });
  } catch (error) {
    console.error("Error Logging in:", error);
    next(error);
  }
};

function generateJwtToken(userData: UserDocument): string {
  return jwt.sign(
    // token-based authentication
    {
      email: userData.email,
      _id: userData._id,
    },
    JWT_SECRET,
    {
      expiresIn: EXPIRATION_TIME,
    }
  );
}

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const user = await getUserByIdservice(userId);

    if (!user) {
      throw new NotFoundError(`User with ID ${userId} not found`);
    }

    res.status(200).json({
      status: "success",
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const update = req.body;

    const currentUser = await findUserByEmailService(userId);
    if (!currentUser) {
      throw new NotFoundError(`User with ID ${userId} not found`);
    }

    if (update.password) {
      const newPassword = update.password;
      if (newPassword === currentUser.password) {
        throw new BadRequestError(
          "New password cannot be the same as the old one."
        );
      }
      update.password = await generateHashedPassword(newPassword);
    }

    const updatedUser = await updateUserInfoByIdService(userId, update);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const facebookAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.user as UserDocument;

    const tokenPayload = {
      email: userData.email,
      _id: userData._id,
    };
    const tokenOptions = {
      expiresIn: EXPIRATION_TIME,
    };
    const token = jwt.sign(tokenPayload, JWT_SECRET, tokenOptions);

    if (!userData) {
      return res
        .status(404)
        .json({ message: "User not found with this email" });
    } else {
      return res.status(200).json({ token, userData });
    }
  } catch (error) {
    console.error("Error in facebookAuthenticate:", error);
    return next(error);
  }
};

export const githubAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.user as UserDocument;

    const tokenPayload = {
      email: userData.email,
      _id: userData._id,
    };
    const tokenOptions = {
      expiresIn: EXPIRATION_TIME,
    };
    const token = jwt.sign(tokenPayload, JWT_SECRET, tokenOptions);

    if (!userData) {
      return res
        .status(404)
        .json({ message: "User not found with this email" });
    } else {
      return res.status(200).json({ token, userData });
    }
  } catch (error) {
    console.error("Error in githubAuthenticate:", error);
    return next(error);
  }
};

export const googleAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body.user as UserDocument;

    if (!userData) {
      res.status(404).json({ message: "User not found with this email" });
      return;
    }

    const token = generateJwtToken(userData);
    res.json({ token, userData });
  } catch (error) {
    console.error("Error in googleAuthenticate:", error);
    return next(error);
  }
};
