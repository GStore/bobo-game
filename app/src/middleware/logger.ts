import winston from "winston";

// set default log level.
let logLevel = 'info'

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


const logger = winston.createLogger({
  levels: logLevels.levels,
  level: logLevel,
  transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.timestamp()
        )
      }),
      //new (winston.transports.File)({ filename: 'somefile.log' })
    ]
})

winston.addColors(logLevels.colors);

// Extend logger object to properly log 'Error' types
var origLog = logger.log
logger.log = () => {

};
logger.log = function (level, msg) {
  if (msg instanceof Error) {
    var args = Array.prototype.slice.call(arguments)
    args[1] = msg.stack
    origLog.apply(logger, args)
  } else {
    origLog.apply(logger, arguments)
  }
}


module.exports = logger
