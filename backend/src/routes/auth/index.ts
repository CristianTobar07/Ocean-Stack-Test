import express from "express";
import { authLogin } from "../../controllers/auth";
import { loginUserValidations } from "../../validations/auth/auth-validation";
import { validateEmptyFileds } from "../../middlewares/validate-fields";
import { validateEmail } from "../../middlewares/user-validation";

export const routerAuth = express.Router();

routerAuth.post(
  "/login",
  [...loginUserValidations, validateEmptyFileds, validateEmail],
  authLogin
);
