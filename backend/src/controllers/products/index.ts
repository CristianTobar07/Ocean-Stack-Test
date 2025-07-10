import { NextFunction, Response, Request } from "express";
import { productsModel, ProductsType } from "../../models/products";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await productsModel.find({ quantity: { $gt: 0 } });
    res.status(200).json({ data: data, status: true });
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
        .json({ message: "El Id del producto es requerido" });
    }

    const data = await productsModel.findById(uid);
    if (data === null) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.status(200).json({ data });
    }
  } catch (err) {
    next(err);
  }
};

const create = async (
  req: Request<{}, {}, ProductsType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const product = await productsModel.create(body);
    res
      .status(201)
      .json({ status: "true", msg: "Product created", data: product });
  } catch (err) {
    next(err);
    return res.status(500).json({ status: false, msg: "Error interno" });
  }
};

const update = async (
  req: Request<{ id: string }, {}, ProductsType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const uid = req.params.id;
    const body = req.body;
    const data = await productsModel.findByIdAndUpdate(uid, body);

    if (data === null) {
      res.status(404).json({ status: "false", msg: "Producto no encontrado" });
    } else {
      res.status(201).json({
        status: "false",
        msg: "Producto actualizado exitosamente",
        data: { ...body, uid: data.id },
      });
    }
  } catch (err) {
    next(err);
  }
};

const Delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uid = req.params.id;

    const data = await productsModel.findByIdAndDelete(uid);

    console.log({ data });

    if (data === null) {
      res.status(404).json({ status: "false", msg: "Producto no encontrado" });
    } else {
      res
        .status(201)
        .json({ status: "true", msg: "Producto eliminado exitosamente" });
    }
  } catch (err) {
    next(err);
  }
};

export { getAll, getById, create, update, Delete };
