#!/usr/bin/env node

import "dotenv/config";

/**
 * Module dependencies.
 */

import {app} from '../app';
import http from 'http';
const debug = require('debug')('backend:server');

import logger from '../utils/logger';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
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

function onError(error: { syscall: string; code: any; }) {
  if (error?.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error?.code) {
    case 'EACCES':
      logger.error(bind + ' precisa de privilégios de administrador');
      // console.error(bind + ' precisa de privilégios de administrador');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(bind + ' Já está em uso');
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
  logger.info('Listening on ' + bind);
}