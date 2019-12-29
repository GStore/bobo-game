import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";

const configure = (expressApp: express.Application) => {
  expressApp.use(bodyParser.json());
  expressApp.use(routes);
};

export default configure;

