import { NextFunction, Response, Request } from "express";
import { userModel } from "../../models/users";
import bcryptjs from "bcryptjs";
import { generateJWT } from "../../helpers/generate-jwt";

interface LoginRequestBody {
  email: string;
  password: string;
}

export const authLogin = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: false,
        msg: "Usuario o contraseña incorrecto",
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        status: false,
        msg: "Usuario o contraseña incorrectos",
      });
    }

    const token = await generateJWT(user.id);

    res.status(200).json({ status: true, user, token });
  } catch (err) {
    next(err);
  }
};
