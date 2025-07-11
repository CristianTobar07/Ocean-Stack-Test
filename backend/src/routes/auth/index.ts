import express from "express";
import { authLogin } from "../../controllers/auth";
import { loginUserValidations } from "../../validations/auth/auth-validation";
import { validateEmptyFileds } from "../../middlewares/common/validate-fields";
import { validateEmail } from "../../middlewares/users/user-validation";

export const routerAuth = express.Router();

routerAuth.post(
  "/login",
  [...loginUserValidations, validateEmptyFileds, validateEmail],
  authLogin
);
