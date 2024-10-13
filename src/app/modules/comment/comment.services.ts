import { Comment } from "./comment.model";
import { PetStory } from "../post/post.model";

// for create comment functionality in services
const createCommentIntoDB = async (req) => {
  const content = req.body;
  const userId = req.user?._id;
  const { postId } = req.params;

  console.log("9 line", content, userId);

  const newComment = new Comment({
    story: postId,
    author: userId, // reference the user
    content: content,
  });

  const comment = await newComment.save();

  const result = await PetStory.findByIdAndUpdate(postId, {
    $push: { comments: comment._id },
  });
  return result;
};
// for comment update functionality in services
const updateCommentIntoDB = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;
  const userId = req.user?._id;

  const comment = await Comment.findById(commentId);
  if (!comment) {
    return res.status(401).json({
      success: false,
      message: "Comment not found",
    });
  }

  if (comment?.userId.toString() !== userId) {
    return res.status(401).json({
      success: false,
      message: "UnAuthorized to update this comment ",
    });
  }
  comment.content = content;
  await comment.save();

  return comment;
};
// for comment delete functionality in services
const deleteCommentIntoDB = async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user?._id;

  const comment = await Comment.findById(commentId);
  if (!comment) {
    return res.status(401).json({
      success: false,
      message: "Comment not found",
    });
  }

  if (comment?.userId.toString() !== userId) {
    return res.status(401).json({
      success: false,
      message: "UnAuthorized to delete this comment ",
    });
  }
  const result = await comment.deleteOne();
  return result;
};
// for comment delete functionality in services
const getCommentsByPostIntoDB = async (postId: string, res) => {
  const comments = await Comment.find({ postId }).populate(
    "author",
    "username"
  );

  if (!comments) {
    return res.status(401).json({
      success: false,
      message: "Comment not found",
    });
  }

  return comments;
};

export const CommentServices = {
  createCommentIntoDB,
  updateCommentIntoDB,
  deleteCommentIntoDB,
  getCommentsByPostIntoDB,
};
