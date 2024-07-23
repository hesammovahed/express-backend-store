import winston from "winston";

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        winston.format.printf(info => `(${info.timestamp}) ${info.level} : ${info.message}`),
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({filename: "./logs/error.log", level: "error", maxsize: 5242880, maxFiles: 5}),
        new winston.transports.File({filename: "./logs/info.log", level: "info", maxsize: 5242880, maxFiles: 5}),
        new winston.transports.File({filename: "./logs/warn.log", level: "warn", maxsize: 5242880, maxFiles: 5})
    ]
})