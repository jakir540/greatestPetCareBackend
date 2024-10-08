import { Document, Types } from "mongoose";

export interface IComment extends Document {
  content: string;
  author: Types.ObjectId; // author is a reference to the User model
  story: Types.ObjectId;
  createdAt: Date;
}
