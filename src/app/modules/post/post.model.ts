import mongoose, { Document, Schema } from "mongoose";
import { IPetStory } from "./post.interface";

const PetStorySchema = new Schema<IPetStory>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  //   author: { type: Schema.Types.ObjectId, required: true, ref: "User" }, // Use Schema.Types.ObjectId
  category: { type: String, enum: ["Tip", "Story"], required: true },
  images: { type: [String], default: [] },
  isPremium: { type: Boolean, default: false },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  //   comments: { type: [Schema.Types.ObjectId], default: [], ref: "Comment" }, // Use Schema.Types.ObjectId
  createdAt: { type: Date, default: Date.now },
});

// Create the model
export const PetStory = mongoose.model<IPetStory>("PetStory", PetStorySchema);
