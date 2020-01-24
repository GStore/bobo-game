import express from "express";
import * as fs from "fs";
import path from "path";
import admZip, { IZipEntry } from "adm-zip";


import logger from "../middleware/logger";
const defaultPacksLocation="../../../../images/cards";
const imageRoute: express.IRouter = express.Router();
const imageLocation: string = path.resolve(process.env.BG_PACKS || defaultPacksLocation);

// TODO: Investigate why logs are not displaying when running with npm serve
logger.log("info", `image locaton: ${imageLocation}`);

const getZipEntries = (zipLocation: string): IZipEntry[] | undefined => {
    if (!fs.existsSync(zipLocation)) {
        return undefined;
    }
    const zip = new admZip(`${zipLocation}`);
    const entries = zip.getEntries();
    if (entries.length > 0) {
        return entries;
    }
    return undefined;
};

if (!fs.existsSync(imageLocation)) {
    logger.log("fatal", "folder not found");
    throw new Error("unable to find folder");
}

imageRoute.get("/packs", (req: express.Request, res: express.Response) => {
    const cardLocation = `${imageLocation}`;
    const files = fs.readdirSync(cardLocation);
    const packs = files.map(file => path.parse(file).name);
    res.json(packs);
});

imageRoute.get("/packs/:pack", (req: express.Request, res: express.Response) => {
    const pack = req.params.pack;
    const packLocation = `${imageLocation}/${pack}.zip`;
    const entries = getZipEntries(packLocation);
    if (!entries) {
        res.sendStatus(404);
    } else {
        const zipfiles = entries.map(e => e.entryName);
        res.json(zipfiles);
    }
});

imageRoute.get("/packs/:pack/:letter", (req: express.Request, res: express.Response) => {
    const pack = req.params.pack;
    const packLocation = `${imageLocation}/${pack}.zip`;
    logger.log("trace", JSON.stringify(packLocation));
    const entries = getZipEntries(packLocation);
    logger.log("trace", JSON.stringify(entries));
    try{
        if (!entries) {
            res.sendStatus(404);
        } else {
            const letter = req.params.letter;
            const entry = entries.find(f => {
                return f.entryName[0] === letter;
            });
    
            if (entry) {
                res.setHeader("image-name", path.parse(entry.entryName).name);
                res.setHeader("Content-Type", "image/png");
                res.send(entry.getData());
                return;
            }
        }
    }
    catch(exception) {
        logger.log("trace", exception)
    }
    
    res.sendStatus(404);
});

export default imageRoute;
