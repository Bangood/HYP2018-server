/**
 * Created by pure on 2018/3/20.
 */
import mongodbUtil from './utils/mongodbUtil';
import koaUtil from './utils/koaUtil';

(async () => {
  await mongodbUtil.init();
  await koaUtil.init();
})();