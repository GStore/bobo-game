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
imageRoute.get("/images/:letter", (req: express.Request, res: express.Response) => {
    const letter = req.params.letter;
    const files = fs.readdirSync(imageLocation);
    const file = files.find(f => {
        return f[0] === letter;
    });
    if(file) {
      res.sendFile(`${imageLocation}/prototypes/${file}`);
      return;
    }
    res.sendStatus(404);

});
//imageRoute.use("/images", express.static(imageLocation));

export default imageRoute;
