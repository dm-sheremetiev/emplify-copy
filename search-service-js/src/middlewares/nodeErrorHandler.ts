import logger from '../utils/logger';

/**
 * Node startup error handler.
 *
 * @param  {NodeJS.ErrnoException} err
 * @returns <void>
 */
export default function nodeErrorHandler(err: NodeJS.ErrnoException): void {
  switch (err.code) {
    case 'EACCES':
      logger.log('error', 'Port requires elevated privileges.');
      process.exit(1);

      break;

    case 'EADDRINUSE':
      logger.log('error', 'Port is already in use.');
      process.exit(1);

      break;

    default:
      throw err;
  }
}
