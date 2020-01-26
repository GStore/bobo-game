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
        trace: "magenta",
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

const Logger = (label: string) => {
    return {
        fatal: (message: string) => {
            logger.log("fatal", message, { label: label });
        },
        error: (message: string) => {
            logger.log("error", message, { label: label });
        },
        warn: (message: string) => {
            logger.log("warn", message, { label: label });
        },
        info: (message: string) => {
            logger.log("info", message, { label: label });
        },
        debug: (message: string) => {
            logger.log("debug", message, { label: label });
        },
        trace: (message: string) => {
            logger.log("trace", message, { label: label });
        },
    };
};

/*
Example usage:
logger.trace("can't find error");
logger.debug(`debugging to find error`);
logger.info(`need info on memory amount`);
logger.warn(`could be running out or mem`);
logger.error(`some systems have failed`);
logger.fatal(`a fatal error occured`);
*/
export default Logger;
