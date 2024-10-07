import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    phone: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    profilePicture: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    // followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    // following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = model<IUser>("User", UserSchema);
export default User;
