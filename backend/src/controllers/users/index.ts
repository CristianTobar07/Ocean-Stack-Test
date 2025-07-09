import { NextFunction, Response, Request } from "express";
import { userModel } from "../../models/users";
import bccryptjs from "bcryptjs";

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
      const id_user = req.params.id;
      const data = await userModel.findById(id_user);
      res.status(200).json({ data: data, status: true });
    } catch (err) {
      next(err);
    }
  }
}
