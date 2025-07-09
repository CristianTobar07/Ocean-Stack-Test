import { check } from "express-validator";

export const registerUserValidations = [
  check("name", "El nombre de usuario es obligatorio").notEmpty(),
  check("email", "El correo es obligatorio").notEmpty(),
  check("password", "La contraseña es obligatoria").notEmpty(),
  check("user_type", "El tipo de usuario es requerido").notEmpty(),
];

export const loginUserValidations = [
  check("email", "El correo es obligatorio").notEmpty(),
  check("password", "La contraseña es obligatoria").notEmpty(),
];
