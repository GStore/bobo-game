/** ILogger   */
interface ILogger {
    /** LOG_LEVEL=fatal */
    fatal(message: string): void;
    /** LOG_LEVEL=error */
    error(message: string): void;
    /** LOG_LEVEL=warn */
    warn(message: string): void;
    /** LOG_LEVEL=info */
    info(message: string): void;
    /** LOG_LEVEL=debug */
    debug(message: string): void;
    /** LOG_LEVEL=trace */
    trace(message: string): void;
}
