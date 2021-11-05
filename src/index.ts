import Koa from "koa";

import Router from "koa-router";

import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

import routers from "./routes";

const app = new Koa();
const router = new Router();

const PORT = 9000;

// Hello World
router.get("/", async(ctx, next) => {
    ctx.body = {msg: "Welcome to Koa"};

});

// Hello World
router.get("/ping", async(ctx, next) => {
    ctx.body = {msg: "Pong"};
});

//Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(routers());

//Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log(`App listening at ${PORT}`));
