import express from "express";
import { UsersController } from "../../controllers/users";
import { validateEmptyFileds } from "../../middlewares/common/validate-fields";
import {
  validateEmailExist,
  validateName,
  validatePassword,
  validateTypeUser,
} from "../../middlewares/users/user-validation";
import { registerUserValidations } from "../../validations/auth/auth-validation";
import { validateJWT } from "../../middlewares/auth/validate-jwt";

export const routerUsers = express.Router();

routerUsers.post(
  "/register",
  [
    ...registerUserValidations,
    validateEmptyFileds,
    validateName,
    validateTypeUser,
    validatePassword,
    validateEmailExist,
  ],
  UsersController.createUser
);
routerUsers.get("/user", validateJWT, UsersController.getUserById);
