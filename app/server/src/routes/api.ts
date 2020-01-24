import express from "express";
import packs from "./packs";

const api: express.IRouter = express.Router();

api.get("/api", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.sendStatus(400);
    next();
});
api.use("/api", packs);
export default api;
