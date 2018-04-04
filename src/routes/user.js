import Router from 'koa-router';
import { create, findById, update, login } from '../controllers/user';

const router = new Router();

router.get('/:id', findById)
    .put('/:id', update)
    .post('/regist', create);

router.post('/login', login);

export default router.routes();