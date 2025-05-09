"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proxy_controller_1 = require("../controllers/proxy.controller");
const router = (0, express_1.Router)();
router.get("/", proxy_controller_1.proxy);
exports.default = router;
