import Router from "koa-router";

import { GetUser, InsertUser } from "../controllers/user/user.controller"

const router = new Router({ prefix: '/users' })

router.get('/', GetUser);
router.post('/', InsertUser);

export default router;