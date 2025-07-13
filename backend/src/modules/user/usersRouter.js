import express from "express";
import usersController from "./usersController.js";

const usersRouter = express.Router();

usersRouter.post("/", usersController.addUser);
usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/:id", usersController.getUserBy);
usersRouter.patch("/:id", usersController.updateUser);
usersRouter.delete("/:id", usersController.deleteUser)
usersRouter.delete("/", usersController.deleteAll);

export default usersRouter;