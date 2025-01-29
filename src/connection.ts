import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST as any,
  port: process.env.DB_PORT as any,
  username: process.env.DB_USER as any,
  password: process.env.DB_PASSWORD as any,
  database: process.env.DB_DATABASE as any,
});

export default AppDataSource;
