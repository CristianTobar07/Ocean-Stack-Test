import { check } from "express-validator";

export const ordersValidations = [
  check("products")
    .exists()
    .withMessage('El campo "products" es obligatorio')
    .isArray({ min: 1 })
    .withMessage("Debe agregar al menos un producto"),

  check("products.*.uid")
    .exists()
    .withMessage("Cada producto debe tener un uid"),

  check("products.*.quantity")
    .exists()
    .withMessage("Cada producto debe tener una cantidad")
    .isInt({ min: 1, max: 1000 })
    .withMessage(
      "La cantidad del producto debe ser un número entero entre 1 y 1000 unidades"
    ),
];
