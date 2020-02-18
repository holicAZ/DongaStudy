import express from "express";
import { handleHome, handleLogin } from "../controllers/globalController";
import routes from "../routes";
const globalRouter = express.Router();

globalRouter.get(routes.home, handleHome); // 무한 url 함수실행
globalRouter.get(routes.login, handleLogin); // /login url 들어가면 함수 실행

export default globalRouter;
