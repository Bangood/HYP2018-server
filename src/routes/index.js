/**
 * Created by pure on 2018/3/20.
 */
import Router from 'koa-router';
import primitive from './primitive';
import woman from './woman';
import user from './user';

const router = new Router();

router.prefix('/v1');
router.use('/primitive', primitive);
router.use('/woman', woman);
router.use('/user', user);

export default router;