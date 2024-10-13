import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PostStoryServices } from "./post.services";

const CreatePetStroyControllers = catchAsync(async (req, res) => {
  console.log("body from post", req.user);

  // Check if req.user is available and contains _id
  if (!req.user || !req.user.userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. User must be logged in to create a post.",
    });
  }

  // Destructure the required fields from request body
  const { title, content, category, images, coverImage } = req.body;

  // Prepare the story data
  const storyData = {
    title,
    content,
    category,
    coverImage,
    images,
    author: req.user?.userId, // Assign the user ID to the author field
  };

  console.log("storyData ", storyData);

  // Call the service to create a story in the database
  const result = await PostStoryServices.createPetStoryIntoDB(storyData);

  // Send response back to the client
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post Created successfully",
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
// get all pet story controller
const GetAllPetStroyControllers = catchAsync(async (req, res) => {
  const result = await PostStoryServices.GetAllPetStoryIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get all post  is successfully",
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
// get all user story
const GetUserPetStroyControllers = catchAsync(async (req, res) => {
  const result = await PostStoryServices.GetUserPetStoryIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Get user post is successful",
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
// upvote pet story controller
const UpvotePetStroyControllers = catchAsync(async (req, res) => {
  const result = await PostStoryServices.UpvotePetStroyIntoDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "upvote update  is successfully",
    data: result,
  });
});
// downvote pet story controller
const DownvotePetStroyControllers = catchAsync(async (req, res) => {
  const result = await PostStoryServices.DownvotePetStroyIntoDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "upvote update  is successfully",
    data: result,
  });
});
// downvote pet story controller
const AddCommentControllers = catchAsync(async (req, res) => {
  const commentId = req.body.commentId;

  const result = await PostStoryServices.AddCommentIntoDB(
    req.params.id,
    commentId
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "upvote update  is successfully",
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
  UpvotePetStroyControllers,
  DownvotePetStroyControllers,
  AddCommentControllers,
  GetAllPetStroyControllers,
};
