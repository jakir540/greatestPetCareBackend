import bcrypt from "bcrypt";
import config from "../../config";
// import { IUser } from "./user.interface";

import AppError from "../../../errors/appError";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";

// for user sign up functionality in services
const createCommentIntoDB = async (req) => {
  const content = req.body;
  const userId = req.user?._id;

  console.log("9 line", content, userId);

  const newComment = {
    author: userId, // reference the user
    content: content,
  };
};

export const CommentServices = {
  createCommentIntoDB,
};
