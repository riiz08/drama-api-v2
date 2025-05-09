import { Router } from "express";
import { proxy } from "../controllers/proxy.controller";

const router = Router();

router.get("/", proxy);

export default router;
