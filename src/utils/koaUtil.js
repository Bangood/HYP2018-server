/**
 * Created by pure on 2018/3/20.
 */
import Http from 'http';
import Koa from 'koa';
import Compose from 'koa-compose';
import Logger from 'koa-logger';
import Jwt from 'koa-jwt';
import Respond from 'koa-respond';
import Helmet from 'koa-helmet';
import BodyParser from 'koa-bodyparser';
import Cors from '@koa/cors';
import router from '../routes';
import { port } from '../configs';
import logger from './loggerUtil';
import { queryPretty } from '../middlewares';

const app = new Koa();
// composed middleware
const all = Compose([
  Helmet(),
  Logger(),
  Respond(),
  queryPretty(),
  BodyParser(),
  Cors(),
  Jwt({ secret: '5201314' }).unless({ path: [/^\/v1\/user\/login/, /^\/v1\/user\/regist/] }),
  router.routes()
]);

app.use(all);

async function init() {
  await new Promise(($resolve) => {

    const server = Http.createServer(app.callback());
    server.on('error', $err => {
      logger.error($err.message);
      process.exit(0);
    });

    server.listen(port, () => {
      logger.info(`Server started on ${port}`);
      $resolve();
    });
  });
}

export default { init };