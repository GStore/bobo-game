import express from 'express';
import routes from './routes';


export const app: express.IRouter=express.Router();

app.use("/", express.static('dist/ui'));

app.use(routes);

