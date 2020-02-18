import express from "express";
import {
  handleHome,
  handleLogin,
  handleLogout,
  handleJoin,
  handleWritting
} from "../controllers/globalController";
import routes from "../routes";
const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome); // 무한 url 함수실행
globalRouter.get(routes.login, handleLogin); // /login url 들어가면 함수 실행
globalRouter.get(routes.logout, handleLogout);
globalRouter.get(routes.join, handleJoin);
globalRouter.get(routes.writting, handleWritting);
export default globalRouter;
