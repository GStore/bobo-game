import express from 'express';
const imageRoute: express.IRouter = express.Router();
const imageLocation: string=process.env.BG_IMAGES || 'images';

console.debug("image location", JSON.stringify(process.env.BG_IMAGES));

imageRoute.use('/images', express.static(imageLocation));


export default imageRoute;
