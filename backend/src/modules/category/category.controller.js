/**
 * Import required modules
 */
import { categoryModel } from "./category.model.js"; // Category model for database interactions

/**
 * Define a class to manage category-related operations
 */
class CategoryController {
  /**
   * Add a new category to the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async addCategory(req, res) {
    try {
      // Create a new category
      const category = await categoryModel.create(req.body);
      return res.status(201).json(category);
    } catch (error) {
      // Return an error response if category creation fails
      return res.status(404).json({ error: "Can not add category", error });
    }
  }

  /**
   * Retrieve all categories from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getAllCategories(req, res) {
    // Find all categories
    const categories = await categoryModel.find();
    return res.status(200).json(categories);
  }

  /**
   * Update a category in the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async updateCategory(req, res) {
    // TO DO: Implement category update logic
  }

  /**
   * Delete a category from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async deleteCategory(req, res) {
    // TO DO: Implement category delete logic
  }
}

/**
 * Create a new instance of the CategoryController class
 */
const categoryController = new CategoryController();

/**
 * Export the CategoryController instance
 */
export default categoryController;