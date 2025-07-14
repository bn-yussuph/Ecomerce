/**
 * Import required modules
 */
import express from "express"; // Express.js framework
import usersController from "./usersController.js"; // Users controller for handling user-related operations

/**
 * Create a new Express router instance for user routes
 */
const usersRouter = express.Router();

/**
 * Define user routes
 */
usersRouter.post("/", usersController.addUser); // Create a new user
usersRouter.get("/", usersController.getAllUsers); // Retrieve all users
usersRouter.get("/:id", usersController.getUserBy); // Retrieve a user by ID
usersRouter.patch("/:id", usersController.updateUser); // Update a user by ID
usersRouter.delete("/:id", usersController.deleteUser); // Delete a user by ID
usersRouter.delete("/", usersController.deleteAll); // Delete all users

/**
 * Export the users router
 */
export default usersRouter;