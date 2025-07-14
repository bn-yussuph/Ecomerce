/**
 * Import required modules
 */
import { subCategoryModel } from "./subcategory.model.js"; // Subcategory model for database interactions

/**
 * Define a class to manage subcategory-related operations
 */
class SubCategoryController {
  /**
   * Add a new subcategory to the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async addSubCategory(req, res) {
    try {
      // Create a new subcategory
      const subcategory = await subCategoryModel.create(req.body);
      return res.status(201).json(subcategory);
    } catch (error) {
      // Return an error response if subcategory creation fails
      return res.status(404).json({ error: "Can not add category", error });
    }
  }

  /**
   * Retrieve all subcategories from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getAllSubCategories(req, res) {
    // Find all subcategories
    const subcategories = await subCategoryModel.find();
    return res.status(200).json(subcategories);
  }

  /**
   * Update a subcategory in the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async updateSubCategory(req, res) {
    // TO DO: Implement subcategory update logic
  }

  /**
   * Delete a subcategory from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async deleteSubCategory(req, res) {
    // TO DO: Implement subcategory delete logic
  }
}

/**
 * Create a new instance of the SubCategoryController class
 */
const subcategoryController = new SubCategoryController();

/**
 * Export the SubCategoryController instance
 */
export default subcategoryController;