import * as dotenv from 'dotenv';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';

export default {
  hostname: isDev
    ? `http://localhost:${process.env.APP_PORT}`
    : process.env.HOSTNAME,
  environment: process.env.NODE_ENV || 'development',
  port: process.env.APP_PORT,
  contentful: {
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT
  },
  logging: {
    dir: process.env.LOGGING_DIR || 'logs',
    level: process.env.LOGGING_LEVEL || 'info',
    maxSize: process.env.LOGGING_MAX_SIZE || '20m',
    maxFiles: process.env.LOGGING_MAX_FILES || '7d',
    datePattern: process.env.LOGGING_DATE_PATTERN || 'YYYY-MM-DD',
    logFileGenarationSupport: process.env.LOG_FILE_GENERATION_SUPPORT || 'true'
  }
};
