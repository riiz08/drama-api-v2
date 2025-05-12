import { Router } from "express";
import {
  getEpisodeDetail,
  getEpisodeList,
} from "../controllers/episode.controller";

const router = Router();

router.get("/detail/:slug", getEpisodeDetail);
router.get("/:id", getEpisodeList);

export default router;
