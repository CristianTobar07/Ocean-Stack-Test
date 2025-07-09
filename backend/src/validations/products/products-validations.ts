import { check } from "express-validator";

export const productsValidations = [
  check("name", "La nombre del producto es obligatorio").notEmpty(),
  check("price", "El precio del producto es obligatorio").notEmpty(),
  check(
    "price",
    "El precio mínimo del producto es 500 y máximo de 200.000 COP"
  )
    .notEmpty()
    .isFloat({ min: 1, max: 1000 }),
  check("quantity", "La cantidad del producto obligatoria").notEmpty(),
  check(
    "quantity",
    "La cantidad mínima del producto es 1 y máxima de 1000 unidades"
  )
    .notEmpty()
    .isFloat({ min: 1, max: 1000 }),
];
