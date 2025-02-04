import { NextFunction, Request, Response } from "express";

import { UserServices } from "../services";
import { CreateUserBodyReq, FindUserByIdReqParams } from "../types/user";
import { NotFoundError } from "../error/NotFoundError";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email }: CreateUserBodyReq = req.body;
    await UserServices.createUser(username, email);
    res.status(200).json({});
  } catch (err) {
    return next(err);
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.getUsers();
    res.status(200).json(users);
  } catch (err) {
    return next(err);
  }
};

const findById = async (
  req: Request<FindUserByIdReqParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await UserServices.getUserById(id);
    if (!user) {
      throw new NotFoundError("No users found");
    }
    res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

export const UserController = {
  create,
  findAll,
  findById,
};
