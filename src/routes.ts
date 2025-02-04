import express from "express";

import { UserController } from "./controllers";

const router = express.Router();

router.get("/users", UserController.findAll);
router.get("/users/:id", UserController.findById);
router.post("/users", UserController.create);

export default router;
