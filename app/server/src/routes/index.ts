import express from "express";
import imageRoute from "./image-route";

const routes: express.IRouter = express.Router();
routes.use((req: express.Request, res: express.Response, next: any) => {
    console.log("test");
    next();
});
routes.use("/images", imageRoute);

export default imageRoute;
