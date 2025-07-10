// src/validation/loginSchema.ts
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Correo inválido").required("Correo requerido"),
  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .max(18, "Máximo 18 caracteres")
    .required("Contraseña requerida"),
});
