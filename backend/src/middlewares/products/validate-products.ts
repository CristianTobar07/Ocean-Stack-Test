import { NextFunction, Request, Response } from "express";
import { productsModel, ProductsType } from "../../models/products";

export const validateNameProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.body.name;
  const regexname = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9\s]{3,50}$/;

  if (!regexname.test(name)) {
    return res.status(400).json({
      status: false,
      msg: "El nombre del producto no puede contener caracteres especiales, debe tener entre 3 y 50 caracteres",
    });
  }

  next();
};

export const validateProductExist = async (
  req: Request<{}, {}, ProductsType>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  const product = await productsModel.findOne({ name });

  if (product) {
    return res.status(400).json({
      status: false,
      msg: "El producto ya existe",
    });
  }

  next();
};
