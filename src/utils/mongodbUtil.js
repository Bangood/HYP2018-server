/**
 * Created by pure on 2018/3/21.
 */
import Mongoose from 'mongoose';
import logger from './loggerUtil';
import config from '../configs';

const mongodbConf = config.mongodb;
const mongoUri = `mongodb://${mongodbConf.user}:${mongodbConf.password}@${mongodbConf.host}:${mongodbConf.port}/${mongodbConf.database}`;

async function init() {
  return new Promise(($resolve) => {
    Mongoose.connection
      .on('close', () => logger.warn('Mongodb connection closed.'))
      .on('open', () => {
        logger.info(`Connected to database: mongodb://${mongodbConf.host}:${mongodbConf.port}/${mongodbConf.database}`);
        $resolve();
      });

    Mongoose.connect(mongoUri).catch($err => {
      logger.warn(`Unable to connect to mongodb: ${$err.message}`);
      process.exit(0);
    });
  });
}

export default { init };
