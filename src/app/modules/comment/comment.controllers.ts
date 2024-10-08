import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CommentServices } from "../comment/comment.services";

const CreateComment = catchAsync(async (req, res) => {
  const result = await CommentServices.createCommentIntoDB(req);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment Created  is successfully",
    data: result,
  });
});

export const CommentControllers = {
  CreateComment,
};
