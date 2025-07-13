import express from "express";
import productsController from "./product.contoller.js";

const productsRouter = express.Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/:id", productsController.getProduct);
productsRouter.post("/", productsController.addProduct);
productsRouter.put("/:id", productsController.updateProduct);
productsRouter.delete("/:id", productsController.deleteProduct);

export default productsRouter;