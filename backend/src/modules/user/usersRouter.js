import express from "express";
import usersController from "./usersController.js";

const usersRouter = express.Router();

usersRouter.post("/", usersController.addUser);
usersRouter.get("/", usersController.getAllUsers);
usersRouter.delete("/:id", usersController.deleteUser)

export default usersRouter;