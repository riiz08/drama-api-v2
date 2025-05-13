import { Router } from "express";
import { proxy, proxyV2 } from "../controllers/proxy.controller";

const router = Router();

router.get("/", proxy);
router.get("/v2", proxyV2);

export default router;
