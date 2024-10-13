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

router.get(
  "/me",
  auth(USER_ROLE.admin, USER_ROLE.user),
  UserControllers.getProfile
);

// Update user profile route
router.put(
  "/me",
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(AuthValidation.UpdateUserValidationSchema),
  UserControllers.updateProfile
);

// Get user by id
router.get("/alluser", UserControllers.getAllUser);
// Get user by id
router.get("/:id", UserControllers.getUserById);

// router.patch(
//   '/updateRole/:id',
//   auth(USER_ROLE.admin, USER_ROLE.user),
//   validateRequest(AuthValidation.UpdateUserValidationSchema),
//   UserControllers.promoteUserProfile,
// );
// // delete user from db
// router.delete('/:id', auth(USER_ROLE.admin), UserControllers.deleteUser);

export const UserRouter = router;
