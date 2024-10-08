import express from "express";
import { PostControllers } from "./post.controllers";
// import auth from "../../middleware/auth";
// import { AuthValidation } from "../user/user.validation";

const router = express.Router();

// for signup route
// create post story
router.post("/", PostControllers.CreatePetStroyControllers);

// update post story
router.put("/:id", PostControllers.UpdatePetStroyControllers);

// deleter post story
router.delete("/:id", PostControllers.DeletePetStroyControllers);

// single get post
router.get("/:id", PostControllers.GetSinglePetStroyControllers);

// get user post
router.get("/my-post", PostControllers.GetUserPetStroyControllers);

// get user post
router.get(
  "/category/:category",
  PostControllers.GetPetStroyByCategoryControllers
);

export const PostRouter = router;
