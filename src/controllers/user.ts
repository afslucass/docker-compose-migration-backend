import { Request, Response } from "express";

import { UserServices } from "../services";
import { CreateUserBodyReq, FindUserByIdReqParams } from "../types/user";

const create = async (req: Request, res: Response) => {
  const { username, email }: CreateUserBodyReq = req.body;
  await UserServices.createUser(username, email);
  res.status(200).json({});
};

const findAll = async (req: Request, res: Response) => {
  const users = await UserServices.getUsers();
  res.status(200).json(users);
};

const FindById = async (req: Request<FindUserByIdReqParams>, res: Response) => {
  const { id } = req.params;
  const user = await UserServices.getUserById(id);
  const status = user ? 200 : 204;
  res.status(status).json(user);
};

export const UserController = {
  create,
  findAll,
  FindById,
};
