import express from 'express';
import routes from './routes';


export const app: express.IRouter=express.Router();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("UI coming soon!");
});
app.use(routes);

