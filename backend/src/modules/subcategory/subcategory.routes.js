import express from "express";
import subcategoryController from "./subcategory.controller.js";

const subcategoryRouter = express.Router();

subcategoryRouter.get("/", subcategoryController.getAllSubCategories);
subcategoryRouter.post("/", subcategoryController.addSubCategory);
subcategoryRouter.put("/:id", subcategoryController.updateSubCategory);
subcategoryRouter.delete("/:id", subcategoryController.deleteSubCategory);

export default subcategoryRouter;