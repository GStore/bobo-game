import express from "express";
import * as fs from "fs";
import path from "path";
import admZip from "adm-zip";

import logger from "../middleware/logger";

const imageRoute: express.IRouter = express.Router();
const imageLocation: string = process.env.BG_IMAGES || "/undefined";

logger.log("info", `image locaton: ${imageLocation}`);

if (!fs.existsSync(imageLocation)) {
    logger.log("fatal", "folder not found");
    throw new Error("unable to find folder");
}
imageRoute.get("/images/manifest", (req: express.Request, res: express.Response) => {
    const cardLocation = `${imageLocation}/cards`
    const files = fs.readdirSync(cardLocation);
    const zip = new admZip(`${cardLocation}/${files[0]}`);
    const entries = zip.getEntries();
    const zipfiles = entries.map(e => e.entryName);
    res.json(zipfiles);
});
imageRoute.get("/images/:letter", (req: express.Request, res: express.Response) => {
    const letter = req.params.letter;
    const files = fs.readdirSync(imageLocation);
    const file = files.find(f => {
        return f[0] === letter;
    });
    if (file && fs.existsSync(`${imageLocation}/${file}`)) {
        res.setHeader("image-name", path.parse(file).name);
        res.sendFile(`${imageLocation}/${file}`);
        return;
    }
    res.sendStatus(404);
});
//imageRoute.use("/images", express.static(imageLocation));

export default imageRoute;
