import express from "express";
import authController from "./authController.js";

const authRouter = express.Router();

authRouter.post("/signup", authController.signUp);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;