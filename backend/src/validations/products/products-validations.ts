import { check } from "express-validator";

export const productsValidations = [
  check("name", "La nombre del producto es obligatorio").notEmpty(),
  check("price", "El precio del producto es obligatorio").notEmpty(),
  check("quantity", "La cantidad del producto obligatoria").notEmpty(),
];
