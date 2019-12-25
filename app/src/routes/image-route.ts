import express from 'express';
import * as fs from "fs";
const imageRoute: express.IRouter = express.Router();
const imageLocation: string=process.env.BG_IMAGES || "/undefined";
const loglevel:string | undefined="info";

if(loglevel ==="debug") { 
  const files = fs.readdirSync(imageLocation);
  for(let f in files) {
    console.log(files[f]);
  }
}
imageRoute.use("/images",express.static(imageLocation));

export default imageRoute;