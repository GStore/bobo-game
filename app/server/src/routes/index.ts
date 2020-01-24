import express from "express";
import logger from "../middleware/logger";
import api from "./api";

const routes: express.IRouter = express.Router();
routes.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.log("info", "loading routes", { label: "index.ts"});
    next();
});
routes.use(api);
logger.log("info", "routes loaded");
export default routes;
