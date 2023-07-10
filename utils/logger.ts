import pino from "pino";

export default pino({
    enabled: true,
    level: "info",
    timestamp: pino.stdTimeFunctions.isoTime,
});