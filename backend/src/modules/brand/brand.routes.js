/**
 * Import required modules
 */
import express from "express"; // Express.js framework
import brandController from "./brand.controller.js"; // Brand controller for handling brand-related operations

/**
 * Create a new Express router instance for brand routes
 */
const brandsRouter = express.Router();

/**
 * Define brand routes
 */
brandsRouter.get("/", brandController.getAllBrands); // Retrieve all brands
brandsRouter.post("/", brandController.addBrand); // Create a new brand
brandsRouter.put("/:id", brandController.updateBrand); // Update a brand by ID
brandsRouter.delete("/:id", brandController.deleteBrand); // Delete a brand by ID

/**
 * Export the brands router
 */
export default brandsRouter;