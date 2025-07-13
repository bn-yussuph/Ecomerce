import express from "express";
import brandController from "./brand.controller.js";

const brandsRouter = express.Router();

brandsRouter.get("/", brandController.getAllBrands);
brandsRouter.post("/", brandController.addBrand);
brandsRouter.put("/:id", brandController.updateBrand);
brandsRouter.delete("/:id", brandController.deleteBrand);

export default brandsRouter;