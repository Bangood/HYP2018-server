import Router from 'koa-router';
import { create, findById, update } from '../controllers/user';

const router = new Router();

router.get('/:id', findById)
    .put('/:id', update)
    .post('/', create);

export default router.routes();