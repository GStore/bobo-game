import express from "express";
import configure from "./main";
import { consoleLog } from "./middleware/logger";
import chalk from "chalk";
//import history from "connect-history-api-fallback"

const entrypoint: express.Application = express();
const port = process.env.PORT || 9000;
//entrypoint.use(history);

entrypoint.use("/", express.static("dist/ui"));
entrypoint.use(configure);

entrypoint.listen(port, () => {
    consoleLog(chalk.yellow("server started on port: ") + chalk.green(port));
    consoleLog(chalk.green(`http://localhost:${port}`));
});