import express from "express";
import * as fs from "fs";

import logger from "../middleware/logger";

const imageRoute: express.IRouter = express.Router();
const imageLocation: string = process.env.BG_IMAGES || "/undefined";

logger.log("info", `image locaton: ${imageLocation}`);

if (!fs.existsSync(imageLocation)) {
    logger.log("fatal", "folder not found");
    throw new Error("unable to find folder");
}

imageRoute.use("/images", express.static(imageLocation));

export default imageRoute;
