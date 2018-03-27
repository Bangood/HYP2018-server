/**
 * Created by pure on 2018/3/26.
 */
import fs from 'fs';
import winston from 'winston';
import moment from 'moment';
import DailyRotateFile from 'winston-daily-rotate-file';
const dateFormat = () => moment().format('YYYY-MM-DD HH:mm:ss:sss');

//开发阶段使用的logger
let logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({
      timestamp: dateFormat,
      colorize: true,
      json: false,
      level: 'debug',
      label: `pid:${process.pid}`
    })
  ]
});

logger.dbLogger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({
      timestamp: dateFormat,
      colorize: true
    })
  ]
});

//如果有/log目录，说明在生产环境下，创建基于文件的logger
if (fs.existsSync('log')) {
  const allLoggerTransport = new DailyRotateFile({
    name: 'all',
    filename: 'log/all.log',
    timestamp: dateFormat,
    level: 'info',
    colorize: true,
    maxsize: 1024 * 1024 * 10,
    datePattern: '.yyyy-MM-dd',
    label: `pid:${process.pid}`
  });
  const errorTransport = new (winston.transports.File)({
    name: 'error',
    filename: 'log/error.log',
    timestamp: dateFormat,
    level: 'error',
    colorize: true,
    label: `pid:${process.pid}`
  });
  logger = new (winston.Logger)({
    transports: [
      allLoggerTransport,
      errorTransport
    ]
  });
  // 崩溃日志
  const crashLogger = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({
        name: 'error',
        filename: 'log/crash.log',
        level: 'error',
        handleExceptions: true,
        timestamp: dateFormat,
        humanReadableUnhandledException: true,
        json: false,
        colorize: true,
        label: `pid:${process.pid}`
      })
    ]
  });
  // 数据库日志
  const dbLoggerTransport = new (winston.transports.File)({
    name: 'db',
    filename: 'log/db.log',
    timestamp: dateFormat,
    level: 'info'
  });
  logger.dbLogger = new (winston.Logger)({
    transports: [dbLoggerTransport]
  });
  logger.dbLogger.add(allLoggerTransport, {}, true);
  logger.dbLogger.add(errorTransport, {}, true);
}
export default logger;