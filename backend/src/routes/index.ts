import { Router } from "express";
import { routerUsers } from "./users";
import { routerAuth } from "./auth";
import { routerProducts } from "./products";

const router = Router();

router.use(routerUsers);
router.use(routerAuth);
router.use(routerProducts);

export default router;
