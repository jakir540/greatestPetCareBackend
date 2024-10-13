import bcrypt from "bcrypt";
import config from "../../config";
import { IUser } from "./user.interface";
import User from "./user.model";
import AppError from "../../../errors/appError";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";

// for user sign up functionality in services
const userSignUpIntoDB = async (payload: IUser) => {
  const hashPassword = await bcrypt.hash(
    payload.password,
    Number(config.BRYCPT_SLAT)
  );
  payload.password = hashPassword;

  const result = await User.create(payload);

  // remove the password field while send the response
  const user = result.toObject();
  const { ...remainingUserData } = user;

  return remainingUserData;
};

// // user login functionality

const userLoginIntoDB = async (payload: IUser) => {
  // checking the user exist or not
  const user = await User.findOne({ email: payload?.email });
  // console.log('user32', user);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User is not found");
  }

  // check the password is correct or not

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user.password
  );

  // console.log('password', payload?.password);
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "password is not correct ");
  }

  // removing the password,createdAt,updatedAt field in response

  const removeFields = user.toObject();
  const { ...remainingData } = removeFields;
  // console.log(password, createdAt, updatedAt);
  // create jwt token and send to the client

  const jwtPayload = {
    userId: user._id,
    email: user.email,
    role: user.role,
  };

  const accesToken = jwt.sign(jwtPayload, config.jwt_acces_secret as string, {
    expiresIn: "40d",
  });
  return { token: accesToken, remainingData };
};

const getProfileIntoDB = async (req: Request) => {
  // get in user from req , set user in req in auth from jwt payload
  const user = req.user;

  // find user in db using email
  const isUserExists = await User.findOne({ email: user.email });
  // console.log('user exist user 09', isUserExists);

  //show error if don'T find the user

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "user not found ");
  }

  // remove the password field in res
  const removeFields = isUserExists?.toObject();
  const { ...remainingData } = removeFields;
  return remainingData;
};

// get all user from db
const getUserByIdIntoDB = async (UserId: string) => {
  try {
    const users = await User.findById(UserId);

    return users;
  } catch (error) {
    throw new Error("Failed to retrieve users from the database");
  }
};
// get all user from db
const getAllUserIntoDB = async () => {
  const users = await User.find();

  return users;
};
// updateUprofileIdIntoDB function
const updateUprofileIdIntoDB = async (
  UserId: string,
  reqBody: Partial<IUser>
) => {
  const { name, bio, phone, profilePicture } = reqBody;

  const updatedUser = await User.findByIdAndUpdate(
    UserId,
    { name, bio, phone, profilePicture },
    { new: true, runValidators: true }
  );

  if (!updatedUser) {
    throw new Error("User not found.");
  }

  return updatedUser; // Ensure to return the updated user
};
export const UserServices = {
  userSignUpIntoDB,
  userLoginIntoDB,
  getProfileIntoDB,
  getUserByIdIntoDB,
  updateUprofileIdIntoDB,
  getAllUserIntoDB,
};
