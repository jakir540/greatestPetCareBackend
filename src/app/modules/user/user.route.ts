import express from "express";

import { UserControllers } from "./user.controllers";
import { USER_ROLE } from "./user.constant";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { AuthValidation } from "./user.validation";
const router = express.Router();

// for signup route

router.post(
  "/signup",
  validateRequest(AuthValidation.createUserValidationSchema),
  UserControllers.userSignUp
);
router.post(
  "/login",
  validateRequest(AuthValidation.UserLoginValidationSchema),
  UserControllers.userLogin
);
// router.post("/user/me", UserControllers.getProfile);
router.get(
  "/me",
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserControllers.getProfile
);

export const UserRouter = router;
