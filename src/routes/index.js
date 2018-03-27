/**
 * Created by pure on 2018/3/20.
 */
import Router from 'koa-router';
import primitive from './primitive';
import woman from './woman';

const router = new Router();
router.prefix('/v1');
router.use('/primitive', primitive);
router.use('/woman',woman);
export default router;