/**
 * Created by pure on 2018/3/20.
 */
import Router from 'koa-router';
import { create, list } from '../controllers/primitive';

const router = new Router();

router.post('/', create)
  .get('/list', list);

export default router.routes();