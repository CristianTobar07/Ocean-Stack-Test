import express from "express";
import { getAll, getById, create } from "../../controllers/orders";
import { validateJWT } from "../../middlewares/auth/validate-jwt";
import { validateEmptyFileds } from "../../middlewares/common/validate-fields";

import { validateObjectIds } from "../../middlewares/common/validate-format-uid";
import { ordersValidations } from "../../validations/orders";

export const routerorders = express.Router();

routerorders.post(
  "/orders",
  [...ordersValidations, validateEmptyFileds, validateJWT],
  create
);

routerorders.get("/orders", [validateJWT], getAll);

routerorders.get(
  "/orders/:id",
  validateJWT,
  validateObjectIds(["id"]),
  getById
);
