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
    let { id } = req.params;
    const updatedSubCategory = await subCategoryModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSubCategory) {
      return res.status(404).json({ message: "Can not update subcategory" });
    }
    return res.status(201).json({ updatedSubCategory });
}

  /**
   * Delete a subcategory from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async deleteSubCategory(req, res) {
    let { id } = req.params;
    let deletedSubCategory = await subCategoryModel.findByIdAndDelete(id);
    if(!deletedSubCategory){
      return res.status(404).json({error: "can not delete subcategory"})
    }
    return res.status(201).json({ message: "success", deletedSubCategory });
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