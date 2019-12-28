import express from "express";
import imageRoute from "./image-route";

const routes: express.IRouter = express.Router();
routes.use("/images", imageRoute);

export default imageRoute;
