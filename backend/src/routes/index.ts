import { Router } from "express";
import { routerUsers } from "./users";
import { routerAuth } from "./auth";
import { routerProducts } from "./products";
import { routerorders } from "./orders";

const router = Router();

router.use(routerUsers);
router.use(routerAuth);
router.use(routerProducts);
router.use(routerorders);

export default router;
