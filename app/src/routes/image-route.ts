import express from 'express';
const imageRoute: express.IRouter = express.Router();
const imageLocation: string=process.env.BG_IMAGES || "/undefined";

console.debug("image location", JSON.stringify(process.env.BG_IMAGES));

imageRoute.use('/', express.static(imageLocation));

export default imageRoute;