import mongoose, { Document } from "mongoose";

// type from TypeScript and Mongoose (Document)
export type UserDocument = Document & {
  name: string;
  email: string;
  password: string;
};
const UserSchema = new mongoose.Schema(
  {
    // type from database
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>("User", UserSchema);
