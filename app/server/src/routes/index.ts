import express from "express";
import logger from "../middleware/logger";
import packs from "./packs";
import api from "./api";

const routes: express.IRouter = express.Router();
routes.use((req: express.Request, res: express.Response, next: any) => {
    logger.log("info", "loading routes");
    next();
});
routes.use(packs);
routes.use(api);
logger.log("info", "routes loaded");
export default routes;
