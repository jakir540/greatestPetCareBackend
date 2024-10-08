import mongoose, { Document, Schema } from "mongoose";

export interface IPetStory extends Document {
  title: string;
  content: string;
  //   author?: mongoose.Types.ObjectId; // ObjectId referring to the User
  category: "Tip" | "Story";
  images: string[];
  isPremium?: boolean; // For monetization
  upvotes: number; // To store upvotes
  downvotes: number;
  // comments: mongoose.Types.ObjectId[]; // To store comment ObjectIds
  createdAt: Date;
}
