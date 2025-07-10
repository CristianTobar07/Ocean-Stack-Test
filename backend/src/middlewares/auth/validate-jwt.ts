import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const validateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("access-token");

  if (!token) {
    return res.status(401).json({ status: false, msg: "No autorizado" });
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY!);
    next();
  } catch (error) {
    return res.status(401).json({ status: false, msg: "No autorizado" });
  }
};
