import { Router } from "express";
import {
  dramaScrape,
  dramaTrackingView,
  getAllDrama,
  getDramaById,
  getDramaBySlug,
  getDramaRecomended,
  getDramaTrending,
  latestUpdate,
  searchDrama,
} from "../controllers/drama.controller";

const router = Router();
router.get("/", getAllDrama);
router.get("/search", searchDrama);
router.get("/trending", getDramaTrending);
router.get("/recomended", getDramaRecomended);
router.get("/latest-update", latestUpdate);
router.get("/:slug", getDramaBySlug);
router.patch("/:slug/view", dramaTrackingView);
router.get("/by/:id", getDramaById);
router.get("/scrape/:year/:month/:slug", dramaScrape);

export default router;
