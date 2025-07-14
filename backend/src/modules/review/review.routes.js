/**
 * Import required modules
 */
import express from "express"; // Express.js framework
import reviewController from "./review.controller.js"; // Review controller for handling review-related operations

/**
 * Create a new Express router instance for review routes
 */
const reviewRouter = express.Router();

/**
 * Define review routes
 */
reviewRouter.get("/", reviewController.getAllReview); // Retrieve all reviews
reviewRouter.post("/", reviewController.addReview); // Create a new review
reviewRouter.put("/:id", reviewController.updateReview); // Update a review by ID
reviewRouter.delete("/:id", reviewController.deleteReview); // Delete a review by ID

/**
 * Export the review router
 */
export default reviewRouter;