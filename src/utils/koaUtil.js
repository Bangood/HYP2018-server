/**
 * Created by pure on 2018/3/20.
 */
import Koa from 'koa';
import Compose from 'koa-compose';
import Logger from 'koa-logger';
import Respond from 'koa-respond';
import Helmet from 'koa-helmet';
import BodyParser from 'koa-bodyparser';
import Cors from '@koa/cors';
import router from '../routes';
import { port } from '../configs';
import logger from './loggerUtil';

const app = new Koa();
// composed middleware
const all = Compose([
  Helmet(),
  Logger(),
  Respond(),
  BodyParser(),
  Cors(),
  router.routes()
]);

app.use(all);

function init() {
  return new Promise(($resolve, $reject) => {
    app.listen(port, () => {
      logger.info(`Server started on ${port}`);
      $resolve();
    });
  });
}

export default { init };