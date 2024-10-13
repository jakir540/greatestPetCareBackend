import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CommentServices } from "../comment/comment.services";

const CreateCommentController = catchAsync(async (req, res) => {
  const result = await CommentServices.createCommentIntoDB(req);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment Created  is successfully",
    data: result,
  });
});
// update comment controller function
const UpdateCommentController = catchAsync(async (req, res) => {
  const result = await CommentServices.updateCommentIntoDB(req, res);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment updated  is successfully",
    data: result,
  });
});
// update comment controller function
const DeleteCommentController = catchAsync(async (req, res) => {
  const result = await CommentServices.deleteCommentIntoDB(req, res);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment updated  is successfully",
    data: result,
  });
});
// update comment controller function
const getCommentsByPostController = catchAsync(async (req, res) => {
  const { postId } = req.params;

  const result = await CommentServices.getCommentsByPostIntoDB(postId, res);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment get  is successfully",
    data: result,
  });
});

export const CommentControllers = {
  CreateCommentController,
  UpdateCommentController,
  DeleteCommentController,
  getCommentsByPostController,
};
