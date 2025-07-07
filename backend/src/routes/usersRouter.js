import express from "express";
import usersController from "../controllers/usersController.js";

const usersRouter = express.Router();

usersRouter.post("/users", usersController.register);

export default usersRouter;