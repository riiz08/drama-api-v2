import { Router } from "express";
import { getEpisodeDetail } from "../controllers/episode.controller";

const router = Router();

router.get("/detail/:slug", getEpisodeDetail);

export default router;
