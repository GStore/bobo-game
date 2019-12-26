import winston from "winston";
import { LOGLEVEL } from "../config";

const logLevels: winston.config.AbstractConfigSet = {
  levels: {
    fatal: 0,
    crit: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'blue',
    warn: 'yellow',
    crit: 'red',
    fatal: 'red'
  }
};

const consoleTrasportOptions: winston.transports.ConsoleTransportOptions = {
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
       }),
       winston.format.metadata({

       }),
      winston.format.label({ label: "console"})
    ),
};


const logger = winston.createLogger({
  levels: logLevels.levels,
  level: LOGLEVEL,
  transports: [
      new winston.transports.Console(consoleTrasportOptions)
    ]
})

winston.addColors(logLevels.colors);

/*

Example usage:
logger.log("trace", "can't find error");
logger.log("debug", `debugging to find error`);
logger.log("info", `need info on memory amount`);
logger.log("warn", `could be running out or mem`);
logger.log("crit", `some systems have failed`);
logger.log("fatal", `a fatal error occured`);
*/
export default logger;