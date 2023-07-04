#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
/**
 * Module dependencies.
 */
const app_1 = require("../app");
const http_1 = __importDefault(require("http"));
const debug = require('debug')('backend:server');
const logger_1 = __importDefault(require("../utils/logger"));
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app_1.app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app_1.app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if ((error === null || error === void 0 ? void 0 : error.syscall) !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error === null || error === void 0 ? void 0 : error.code) {
        case 'EACCES':
            logger_1.default.error(bind + ' precisa de privilégios de administrador');
            // console.error(bind + ' precisa de privilégios de administrador');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger_1.default.error(bind + ' Já está em uso');
            // console.error(bind + ' Já está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address() || '';
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    logger_1.default.info('Listening on ' + bind);
}
//# sourceMappingURL=www.js.map