/**
 * Created by pure on 2018/3/21.
 */
import Mongoose from 'mongoose';
import logger from './loggerUtil';
import config from '../configs';

const mongoUri = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;

async function init() {
  return new Promise(($resolve, $reject) => {
    Mongoose.connect(mongoUri);
    Mongoose.connection.on('error', () => {
      throw new Error(`unable to connect to database: ${mongoUri}`);
    });
    Mongoose.connection.on('connected', () => {
      logger.info(`Connect to database: mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`);
      $resolve();
    });
  });
}
export default {init};
