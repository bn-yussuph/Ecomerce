/**
 * Import required modules
 */
import express from "express"; // Express.js framework
import subcategoryController from "./subcategory.controller.js"; // Subcategory controller for handling subcategory-related operations

/**
 * Create a new Express router instance for subcategory routes
 */
const subcategoryRouter = express.Router();

/**
 * Define subcategory routes
 */
subcategoryRouter.get("/", subcategoryController.getAllSubCategories); // Retrieve all subcategories
subcategoryRouter.post("/", subcategoryController.addSubCategory); // Create a new subcategory
subcategoryRouter.put("/:id", subcategoryController.updateSubCategory); // Update a subcategory by ID
subcategoryRouter.delete("/:id", subcategoryController.deleteSubCategory); // Delete a subcategory by ID

/**
 * Export the subcategory router
 */
export default subcategoryRouter;