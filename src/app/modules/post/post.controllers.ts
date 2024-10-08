import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PostStoryServices } from "./post.services";

const CreatePetStroyControllers = catchAsync(async (req, res) => {
  console.log("body from post", req.body);
  const { title, content, category, images } = req.body;

  const storyData = {
    title,
    content,
    category,
    images,
    // author: req.user?._id,
  };
  console.log("storyData ", storyData);
  const result = await PostStoryServices.createPetStoryIntoDB(storyData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post Created  is successfully",
    data: result,
  });
});
// update pet story controller
const UpdatePetStroyControllers = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await PostStoryServices.UpdatePetStoryIntoDB(
    id,
    req.body,
    res
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post updated  is successfully",
    data: result,
  });
});

// update pet story controller
const DeletePetStroyControllers = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await PostStoryServices.DeletePetStoryIntoDB(id, res);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post Deleted  is successfully",
    data: result,
  });
});
// update pet story controller
const GetSinglePetStroyControllers = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await PostStoryServices.GetSinglePetStoryIntoDB(id, res);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get single post  is successfully",
    data: result,
  });
});
// get user pet story controller
const GetUserPetStroyControllers = catchAsync(async (req, res) => {
  const userId = req.user?._id;

  const result = await PostStoryServices.GetUserPetStoryIntoDB(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get user post  is successfully",
    data: result,
  });
});
// get user pet story controller
const GetPetStroyByCategoryControllers = catchAsync(async (req, res) => {
  const result = await PostStoryServices.GetPetStroyByCategoryIntoDB(
    req.params.category
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get post story by category  is successfully",
    data: result,
  });
});

export const PostControllers = {
  CreatePetStroyControllers,
  UpdatePetStroyControllers,
  DeletePetStroyControllers,
  GetSinglePetStroyControllers,
  GetUserPetStroyControllers,
  GetPetStroyByCategoryControllers,
};
