# Logging
[back](../README.md)  

Logging is achieved with the help of [winston](https://www.npmjs.com/package/winston) a universal logging library with support for multiple tansports.

Log levels are controlled with the LOG_LEVEL environment variable and are based on [log4j](https://www.tutorialspoint.com/log4j/log4j_logging_levels.htm).  

The log levels arranged by increasing verbosity are:
LEVEL|Description
-|-
fatal | unrecoverable errors
error | server able to start but with errors
warn | Warnings
info | Informational messages
debug | Debug information
trace | Information used to trace

The default log level is set to fatal so will only show fatal error logs.  

[back](../README.md)  