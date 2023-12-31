import { InternalServerError, NotFoundError } from "../helpers/apiError";

import User, { UserDocument } from "../models/User";

export const createUserService = async (
  newUser: UserDocument
): Promise<UserDocument> => {
  try {
    return await newUser.save();
  } catch (error) {
    console.error("Error creating account:", error);
    throw new InternalServerError(
      "An error occured while creating the account."
    );
  }
};

export const findOrCreateUserService = async (
  payload: Partial<UserDocument>
): Promise<UserDocument> => {
  const user = await User.findOne({ googleId: payload.googleId });

  if (user) {
    return user;
  } else {
    const newUser = new User({
      email: payload.email,
      name: payload.name,
      googleId: payload.googleId,
    });

    try {
      return await newUser.save();
    } catch (error) {
      console.error("Error creating account:", error);
      throw new InternalServerError(
        "An error occured while create the account."
      );
    }
  }
};

export const getUserByIdservice = async (
  userId: string
): Promise<UserDocument | null> => {
  const user = await User.findById({ userId: userId });
  if (user === null) {
    throw new NotFoundError(`User with the id ${userId} not found`);
  }
  return user;
};

export const findUserByEmailService = async (
  userEmail: string
): Promise<UserDocument> => {
  try {
    // using select query to avoid sending user password to the client
    // const foundUser = await User.findOne({ email: userEmail }).select(
    //   "-password"
    // );

    const foundUser = await User.findOne({ email: userEmail });
    if (!foundUser) {
      throw new NotFoundError(`User not found with the email ${userEmail}.`);
    }
    return foundUser;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw new InternalServerError(
      "An error occured while searching for the user."
    );
  }
};

export const updateUserInfoByIdService = async (
  userId: string,
  newUserInformation: Partial<UserDocument>
): Promise<UserDocument> => {
  const user = await User.findByIdAndUpdate(userId, newUserInformation, {
    new: true,
  });
  try {
    if (!user) {
      throw new NotFoundError(`User with the ID ${userId} not found`);
    }
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw new InternalServerError(
      "An error occured while searching for the user."
    );
  }
};
