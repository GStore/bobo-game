import express from "express";
import chalk from "chalk";
import history from "connect-history-api-fallback";

import configure from "./main";
import { consoleLog } from "./middleware/logger";

const entrypoint: express.Application = express();
const port = process.env.PORT || 9000;

configure(entrypoint);
entrypoint.use(history());
entrypoint.use("/", express.static("dist/ui"));


entrypoint.listen(port, () => {
    consoleLog(chalk.yellow("server started on port: ") + chalk.green(port));
    consoleLog(chalk.green(`http://localhost:${port}`));
});
