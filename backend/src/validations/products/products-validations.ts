import { check } from "express-validator";

export const productsValidations = [
  check("name", "La nombre del producto es obligatorio").notEmpty(),
  check("price")
    .exists()
    .withMessage("El precio del producto es obligatorio")
    .isFloat({ min: 500, max: 200000 })
    .withMessage(
      "El precio mínimo del producto es 500 y máximo de 200.000 COP"
    ),

  check("quantity")
    .exists()
    .withMessage("La cantidad del producto es obligatoria")
    .isInt({ min: 1, max: 1000 })
    .withMessage(
      "La cantidad del producto debe ser un número entero entre 1 y 1000 unidades"
    ),
];
