import AppDataSource from "../connection";
import { Users } from "../entities/users.entity";

export const getUsers = async () => {
  return await AppDataSource.getRepository(Users).find();
};

export const getUserById = async (id: string) => {
  return await AppDataSource.getRepository(Users).findOne({ where: { id } });
};

export const createUser = async (username: string, email: string) => {
  return await AppDataSource.createQueryBuilder()
    .insert()
    .into(Users)
    .values({
      username,
      email,
    })
    .execute();
};

export const UserServices = {
  getUsers,
  getUserById,
  createUser,
};
