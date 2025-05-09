"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const episode_controller_1 = require("../controllers/episode.controller");
const router = (0, express_1.Router)();
router.get("/:slug", episode_controller_1.getEpisodeList);
router.get("/detail/:slug", episode_controller_1.getEpisodeDetail);
exports.default = router;
