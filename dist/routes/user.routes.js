"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const user_controller_1 = require("../controllers/user/user.controller");
const router = new koa_router_1.default({ prefix: '/users' });
router.get('/', user_controller_1.GetUser);
router.post('/', user_controller_1.InsertUser);
exports.default = router;
