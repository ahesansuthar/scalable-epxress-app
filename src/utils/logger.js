const log4js = require('log4js');
require('dotenv').config();

log4js.configure({
  appenders: {
    dateFile: {
      type: 'dateFile',
      filename: 'logs/app.log',
      pattern: 'yyyy-MM-dd-hh',
      maxLogSize: 10 * 1024 * 1024, // = 10Mb
      backups: 5, // keep five backup files
      compress: true, // compress the backups
      encoding: 'utf-8',
      mode: 0o0640,
      flags: 'w+',
    },
    out: {
      type: 'stdout',
    },
  },
  categories: {
    default: { appenders: ['dateFile', 'out'], level: 'info' },
  },
});

const logger = log4js.getLogger('scalable-node-app');
logger.level = process.env.LOG_LEVEL;
// logger.info("Loggs are configured");
module.exports = logger;
