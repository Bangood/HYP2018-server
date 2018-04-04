/**
 * Created by pure on 2018/3/27.
 */
import Router from 'koa-router';
import { create } from '../controllers/woman';

const router = new Router();

router.post('/', create);

export default router.routes();