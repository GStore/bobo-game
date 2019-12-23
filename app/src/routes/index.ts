import express from 'express';
const imageRoute: express.IRouter = express.Router();
imageRoute.use('/images', express.static('../../../images'));

export default imageRoute;
