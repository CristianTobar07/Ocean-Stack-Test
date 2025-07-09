import { NextFunction, Response, Request } from "express";
import { ordersModel, OrdersType } from "../../models/orders";
import mongoose from "mongoose";
import { productsModel } from "../../models/products";

const create = async (
  req: Request<{}, {}, OrdersType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = req.body.products;

    const productToUpdate = [];

    for (const product of products) {
      if (!mongoose.isValidObjectId(product.uid)) {
        return res.status(400).json({
          message: `Formato inválido del Id: ${product.uid}`,
        });
      }

      const productFound = await productsModel.findById(product.uid);
      if (!productFound) {
        return res.status(404).json({
          status: "false",
          msg: `El Producto '${product.uid}' no fue encontrado. Por favor eliminelo de la orden y vuelva a intentarlo`,
        });
      }

      if (productFound.quantity < product.quantity) {
        return res.status(400).json({
          status: "false",
          msg: `Solo hay ${productFound.quantity} unidades disponibles de producto: '${productFound.name}'`,
        });
      }

      productToUpdate.push({ productFound, quantity: product.quantity });
    }

    const newOrder = await ordersModel.create({ products });

    if (newOrder) {
      for (const { productFound, quantity } of productToUpdate) {
        productFound.quantity -= quantity;
        await productFound.save();
      }
      res
        .status(201)
        .json({ status: "true", msg: "Orden creada exitosamente" });
    } else {
      res.status(500).json({
        status: "true",
        msg: "Error al crear la orden, intentelo más tarde",
      });
    }
  } catch (err) {
    next(err);
    return res.status(500).json({ status: false, msg: "Error interno" });
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await ordersModel.find();
    res.status(200).json({ status: true, data });
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uid = req.params.id;

    if (!uid) {
      return res
        .status(404)
        .json({ message: "El Id de la orden es requerido" });
    }

    const data = await ordersModel.findById(uid);
    if (data === null) {
      res.status(404).json({ status: "false", msg: "Orden no encontrada" });
    } else {
      res.status(200).json({ status: "true", data });5
    }
  } catch (err) {
    next(err);
  }
};

export { getAll, getById, create };
