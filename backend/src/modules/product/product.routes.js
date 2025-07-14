/**
 * Import required modules
 */
import express from "express"; // Express.js framework
import productsController from "./product.controller.js"; // Product controller for handling product-related operations

/**
 * Create a new Express router instance for product routes
 */
const productsRouter = express.Router();

/**
 * Define product routes
 */
productsRouter.get("/", productsController.getAllProducts); // Retrieve all products
productsRouter.get("/:id", productsController.getProduct); // Retrieve a product by ID
productsRouter.post("/", productsController.addProduct); // Create a new product
productsRouter.put("/:id", productsController.updateProduct); // Update a product by ID
productsRouter.delete("/:id", productsController.deleteProduct); // Delete a product by ID

/**
 * Export the products router
 */
export default productsRouter;