import express from "express";

const api: express.IRouter = express.Router();

api.get("/api", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.sendStatus(400);
});

export default api;
