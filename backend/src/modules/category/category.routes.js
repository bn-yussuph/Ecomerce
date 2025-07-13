import express from "express";
import categoryController from "./category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.post("/", categoryController.addCategory);
categoryRouter.put("/:id", categoryController.updateCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);

export default categoryRouter;