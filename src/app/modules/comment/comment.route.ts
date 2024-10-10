import express from "express";
import { CommentControllers } from "./comment.controllers";

const router = express.Router();

// for create comment route

router.post("/:postId/comment", CommentControllers.CreateCommentController);

// for update comment route
router.put("/:commentId", CommentControllers.UpdateCommentController);

// for delete comment route
router.delete("/:commentId", CommentControllers.DeleteCommentController);

// for get comment by post route
router.get("/:postId/comments", CommentControllers.getCommentsByPostController);

export const CommentRouter = router;
