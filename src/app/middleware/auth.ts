import { NextFunction, Request, Response } from "express";

import AppError from "../../errors/appError";
import httpStatus from "http-status";
import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import { IUser, userRole } from "../modules/user/user.interface";

const auth = (...requireRoles: userRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // token check
    // console.log('12line', req.headers.authorization);

    const token = req.headers.authorization?.split(" ")[1];

    console.log("token", token);
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authrized");
    }

    // verify jwt access token

    const decoded = jwt.verify(
      token,
      config.jwt_acces_secret as string
    ) as JwtPayload;

    console.log("decoded://", decoded);

    const { email, role } = decoded;
    console.log(email);

    if (requireRoles && !requireRoles.includes(role)) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        statusCode: httpStatus.UNAUTHORIZED,
        message: "You have an unathorized",
      });
    }

    req.user = decoded;

    next();
    return req.user;
  });
};

export default auth;
