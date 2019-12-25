import express from 'express';
const imageRoute: express.IRouter = express.Router();
const imageLocation: string=process.env.BG_IMAGES || "/undefined";

imageRoute.use("/images",express.static(imageLocation));

export default imageRoute;