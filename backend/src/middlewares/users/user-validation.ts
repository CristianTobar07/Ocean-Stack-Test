import { NextFunction, Request, Response } from "express";
import { userModel, UserType } from "../../models/users";

export const validateName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.body.name;
  const regexname = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{3,50}$/;

  if (!regexname.test(name)) {
    return res.status(400).json({
      status: false,
      msg: "El nombre de usuario no puede contener caracteres especiales, debe tener entre 3 y 50 caracteres",
    });
  }

  next();
};

export const validateEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (email.length < 6 || email.length > 50) {
    return res.status(400).json({
      status: false,
      msg: "El Correo debe tener mínimo 6 a 50 caracteres",
    });
  }

  const regexCorreo = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

  if (!regexCorreo.test(email)) {
    return res.status(400).json({
      status: false,
      msg: "Formato de Correo inválido",
    });
  }

  next();
};

export const validateTypeUser = (
  req: Request<{}, {}, UserType>,
  res: Response,
  next: NextFunction
) => {
  const { user_type } = req.body;

  if (user_type < 1 || user_type > 2) {
    return res.status(400).json({
      status: false,
      msg: "El tipo de usuario debe ser 1 (admin) o 2 (mesero)",
    });
  }

  next();
};

export const validatePassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;

  if (password.length < 6 || password.length > 50) {
    return res.status(400).json({
      status: false,
      msg: "La contraseña debe tener mínimo 6 a 50 caracteres",
    });
  }

  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,50}$/;

  if (!regexPassword.test(password)) {
    return res.status(400).json({
      status: false,
      msg: "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número",
    });
  }

  next();
};

export const validateEmailExist = async (
  req: Request<{}, {}, UserType>,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    return res.status(400).json({
      status: false,
      msg: "El correo electrónico ya están en uso",
    });
  }

  next();
};
