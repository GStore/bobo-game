import express from "express";
import Logger from "../middleware/logger";
import api from "./api";

const log = Logger("routes:index");

const routes: express.IRouter = express.Router();
routes.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    next();
});
routes.use(api);
log.info("routes loaded");
export default routes;
