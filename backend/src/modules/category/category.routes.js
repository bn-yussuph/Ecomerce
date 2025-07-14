/**
 * Import required modules
 */
import express from "express"; // Express.js framework
import categoryController from "./category.controller.js"; // Category controller for handling category-related operations

/**
 * Create a new Express router instance for category routes
 */
const categoryRouter = express.Router();

/**
 * Define category routes
 */
categoryRouter.get("/", categoryController.getAllCategories); // Retrieve all categories
categoryRouter.post("/", categoryController.addCategory); // Create a new category
categoryRouter.put("/:id", categoryController.updateCategory); // Update a category by ID
categoryRouter.delete("/:id", categoryController.deleteCategory); // Delete a category by ID

/**
 * Export the category router
 */
export default categoryRouter;