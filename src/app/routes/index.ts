import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { CommentRouter } from "../modules/comment/comment.route";
import { PostRouter } from "../modules/post/post.route";

const router = Router();

const modulesRoute = [
  {
    path: "/user",
    route: UserRouter,
  },
  {
    path: "/comment",
    route: CommentRouter,
  },
  {
    path: "/post",
    route: PostRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
