import express from "express";
import { app } from "./main";
import * as dotenv from "dotenv";
dotenv.config();
console.debug("image location", JSON.stringify(process.env.BG_IMAGES));

const entrypoint:express.Application=express();
const port=process.env.PORT || 9000;
entrypoint.use(app);

entrypoint.listen(port, () => {
  console.debug("server started on port:", port);
});
