import mongoose, { Document } from "mongoose";

// type from TypeScript and Mongoose (Document)
export type UserDocument = Document & {
  name: string;
  email: string;
  password?: string;
  googleId?: string;
  lastLogin: Date;
};

const UserSchema = new mongoose.Schema(
  {
    // type from the database
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    googleId: { type: String },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>("User", UserSchema);
