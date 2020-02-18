import express from "express";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
// 경로에선 폴더나 파일이나 확장자 명은 알아서 가져와준다.
const app = express();

app.use(routes.home, globalRouter);

export default app; // export를 통해 내보내준다
//  다른 js에서 import 하기위해
