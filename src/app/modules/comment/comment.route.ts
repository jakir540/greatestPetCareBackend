import express from "express";
import { CommentControllers } from "./comment.controllers";

const router = express.Router();

// for signup route

router.post("/signup", CommentControllers.CreateComment);

export const CommentRouter = router;
