import { Router } from "express";
import { routerUsers } from "./users";
import { routerAuth } from "./auth";

const router = Router();

router.use(routerUsers);
router.use(routerAuth);

export default router;
