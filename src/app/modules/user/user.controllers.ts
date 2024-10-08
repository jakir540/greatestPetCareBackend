import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";
import { Request } from "express";

const userSignUp = catchAsync(async (req, res) => {
  const userData = req.body;

  console.log("9 line", userData);
  const result = await UserServices.userSignUpIntoDB(userData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User Registration is successfully",
    data: result,
  });
});

// user login controller funtion
const userLogin = catchAsync(async (req, res) => {
  const result = await UserServices.userLoginIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User login is successfully",
    data: result,
  });
});
// get profile form DB
const getProfile = catchAsync(async (req: any, res) => {
  console.log("35 controller", req);
  const result = await UserServices.getProfileIntoDB(req);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User profile retrived succesfully",
    data: result,
  });
});
// get All User  form DB
const getUserById = catchAsync(async (req, res) => {
  const UserId = req.params.id;
  const result = await UserServices.getUserByIdIntoDB(UserId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User retrived succesfully",
    data: result,
  });
});
export const UserControllers = {
  userSignUp,
  userLogin,
  getProfile,
  getUserById,
};
