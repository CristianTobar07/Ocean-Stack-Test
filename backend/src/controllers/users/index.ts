import { NextFunction, Response, Request } from "express";
import { userModel } from "../../models/users";
import bccryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export class UsersController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const salt = bccryptjs.genSaltSync();
      body.password = bccryptjs.hashSync(body.password, salt);
      const data = await userModel.create(body);
      res.status(200).json({ data: data, status: true });
    } catch (err) {
      next(err);
    }
  }

  static async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header("access-token");
      if (!token) {
        return res.status(401).json({ status: false, msg: "No autorizado" });
      }
      const dataUser: any = jwt.decode(token);

      if (!dataUser) {
        return res.status(401).json({ status: false, msg: "No autorizado" });
      }

      const data = await userModel.findById(dataUser.uid);

      res.status(200).json({ data: data, status: true });
    } catch (err) {
      next(err);
    }
  }
}
