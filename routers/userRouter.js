import express from "express";
import {
  handleUser,
  handleEdit,
  handleId,
  handleChange
} from "../controllers/userController";
import routes from "../routes";
const userRouter = express.Router();

userRouter.get(routes.user, handleUser);
userRouter.get(routes.id, handleId);
userRouter.get(routes.edit, handleEdit);
userRouter.get(routes.changepassword, handleChange);

export default userRouter;
