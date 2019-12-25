import express from "express";
import { app } from "./main";

const entrypoint:express.Application=express();
const port=process.env.PORT || 9000;
entrypoint.use(app);

entrypoint.listen(port, () => {
  console.debug("server started on port:", port);
});
