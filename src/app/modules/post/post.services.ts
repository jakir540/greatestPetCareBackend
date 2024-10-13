import { Response } from "express";
import { IPetStory } from "./post.interface";
import { PetStory } from "./post.model";

// for create pet story  functionality in services
const createPetStoryIntoDB = async (data: Partial<IPetStory>) => {
  console.log("before create ", data);
  const result = await PetStory.create(data);
  console.log(result, "from services");
  return result;
};
// update pet story
const UpdatePetStoryIntoDB = async (
  id: string,
  data: Partial<IPetStory>,
  res: Response
) => {
  const story = await PetStory.findById(id);

  if (!story) {
    return res.status(401).json({
      message: "Story not found",
    });
  }

  const updatedStory = await PetStory.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedStory;
};
// Delete pet story
const DeletePetStoryIntoDB = async (id: string, res: Response) => {
  const story = await PetStory.findById(id);

  if (!story) {
    return res.status(401).json({
      message: "Story not found",
    });
  }

  const result = await PetStory.findByIdAndDelete(id);
  return result;
};
// get all pet story
const GetAllPetStoryIntoDB = async () => {
  const result = await PetStory.find().populate("author", "name email");
  return result;
};
// get single pet story
const GetSinglePetStoryIntoDB = async (id: string, res: Response) => {
  const story = await PetStory.findById(id);

  if (!story) {
    return res.status(401).json({
      message: "Story not found",
    });
  }

  const result = await PetStory.findById(id);
  return result;
};
// get pet story
const GetUserPetStoryIntoDB = async () => {
  const result = await PetStory.find()
    .populate("author", "name email")
    .sort({ createdAt: -1 });
  return result;
};
// Delete pet story
const GetPetStroyByCategoryIntoDB = async (category: string) => {
  const result = await PetStory.find({ category }).sort({ createdAt: -1 });
  return result;
};
// upvote pet story
const UpvotePetStroyIntoDB = async (id: string) => {
  const result = await PetStory.findByIdAndUpdate(id, {
    $inc: { upvotes: 1 },
    new: true,
  });
  return result;
};
// downvote pet story
const DownvotePetStroyIntoDB = async (id: string) => {
  const result = await PetStory.findByIdAndUpdate(id, {
    $inc: { downvotes: 1 },
    new: true,
  });
  return result;
};
// add comment pet story
const AddCommentIntoDB = async (id: string, commentId: string) => {
  const result = await PetStory.findByIdAndUpdate(
    id,
    {
      $push: {
        comments: commentId,
      },
    },
    { new: true }
  );
  return result;
};

export const PostStoryServices = {
  createPetStoryIntoDB,
  UpdatePetStoryIntoDB,
  DeletePetStoryIntoDB,
  GetSinglePetStoryIntoDB,
  GetUserPetStoryIntoDB,
  GetPetStroyByCategoryIntoDB,
  UpvotePetStroyIntoDB,
  DownvotePetStroyIntoDB,
  AddCommentIntoDB,
  GetAllPetStoryIntoDB,
};
