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
// Delete pet story
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
// Delete pet story
const GetUserPetStoryIntoDB = async (userId: string) => {
  const result = await PetStory.find({ author: userId });
  return result;
};
// Delete pet story
const GetPetStroyByCategoryIntoDB = async (category: string) => {
  const result = await PetStory.find({ category }).sort({ createdAt: -1 });
  return result;
};

export const PostStoryServices = {
  createPetStoryIntoDB,
  UpdatePetStoryIntoDB,
  DeletePetStoryIntoDB,
  GetSinglePetStoryIntoDB,
  GetUserPetStoryIntoDB,
  GetPetStroyByCategoryIntoDB,
};
