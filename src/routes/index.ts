import combineRouters from 'koa-combine-routers'
import userRouter from './user.routes';

const router = combineRouters(
  userRouter
);

export default router;