/**
 * Created by pure on 2018/3/27.
 */
import Router from 'koa-router';
import { create, list, update } from '../controllers/woman';

const router = new Router();

router.post('/', create);
router.get('/list', list);
router.put('/:id', update);

export default router.routes();