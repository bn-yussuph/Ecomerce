import express from "express";
import usersRouter from "./usersRouter.js";
import authRouter from "./authRouters.js";

const router = express.Router();

router.use(usersRouter);
router.use(authRouter);

export default router;