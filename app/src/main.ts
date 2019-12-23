import express from 'express';
import imageRoute from './routes';
export const app: express.IRouter=express.Router();

app.use(imageRoute);