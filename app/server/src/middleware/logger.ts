import winston from "winston";
import { LOGLEVEL } from "../config";

export const consoleLog = console.log;

const logLevels: winston.config.AbstractConfigSet = {
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5,
    },
    colors: {
        trace: "white",
        debug: "green",
        info: "blue",
        warn: "yellow",
        error: "red",
        fatal: "red",
    },
};

const consoleTrasportOptions: winston.transports.ConsoleTransportOptions = {
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ level, message, label, timestamp }) => {
            return `${timestamp} [${label}] ${level}: ${message}`;
        }),
        winston.format.metadata({}),
        winston.format.label({ label: "console" }),
    ),
};

winston.addColors(logLevels.colors);

const logger = winston.createLogger({
    levels: logLevels.levels,
    level: LOGLEVEL,
    transports: [new winston.transports.Console(consoleTrasportOptions)],
});

/*
TODO: convert this so that it retuns the following methods:
.fatal(label, message)
.error(label, message)
.warn(label, message)
.info(label, message)
.debug(label, message)
.trace(label, message)

logger.log("<level>", "<message>", { label: "some label"});

*/

/*

Example usage:
logger.log("trace", "can't find error");
logger.log("debug", `debugging to find error`);
logger.log("info", `need info on memory amount`);
logger.log("warn", `could be running out or mem`);
logger.log("error", `some systems have failed`);
logger.log("fatal", `a fatal error occured`);
*/
export default logger;
