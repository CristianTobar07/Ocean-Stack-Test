import express from "express";
import { UsersController } from "../../controllers/users";
import { validateEmptyFileds } from "../../middlewares/validate-fields";
import {
  validateEmailExist,
  validateName,
  validatePassword,
  validateTypeUser,
} from "../../middlewares/user-validation";
import { registerUserValidations } from "../../validations/auth/auth-validation";

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
routerUsers.get("/user/:id", UsersController.getUserById);
