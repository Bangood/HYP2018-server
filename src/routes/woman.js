/**
 * Created by pure on 2018/3/27.
 */
import Router from 'koa-router';
import { create, list } from '../controllers/woman';

const router = new Router();

router.get('/list', list);
router.post('/', create);

export default router.routes();