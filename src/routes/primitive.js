/**
 * Created by pure on 2018/3/20.
 */
import Router from 'koa-router';
import { create, list, update } from '../controllers/primitive';

const router = new Router();

router.post('/', create)
  .get('/list', list)
  .put('/:id', update);

export default router.routes();