import express from "express";
import {
  getAll,
  getById,
  create,
  update,
  Delete,
} from "../../controllers/products";
import { validateJWT } from "../../middlewares/auth/validate-jwt";
import { validateEmptyFileds } from "../../middlewares/common/validate-fields";
import { productsValidations } from "../../validations/products/products-validations";
import {
  validateNameProduct,
  validateProductExist,
} from "../../middlewares/products/validate-products";
import { validateObjectIds } from "../../middlewares/common/validate-format-uid";

export const routerProducts = express.Router();

routerProducts.post(
  "/products",
  [
    validateJWT,
    ...productsValidations,
    validateEmptyFileds,
    validateNameProduct,
    validateProductExist,
  ],
  create
);
routerProducts.get("/products", [validateJWT], getAll);
routerProducts.get(
  "/products/:id",
  [validateJWT],
  validateObjectIds(["id"]),
  getById
);
routerProducts.put(
  "/products/:id",
  [validateJWT],
  validateObjectIds(["id"]),
  update
);
routerProducts.delete(
  "/products/:id",
  [validateJWT],
  validateObjectIds(["id"]),
  Delete
);
