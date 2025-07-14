/**
 * Import required modules
 */
import { brandModel } from "./brand.model.js"; // Brand model for database interactions

/**
 * Define a class to manage brand-related operations
 */
class BrandController {
  /**
   * Add a new brand to the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async addBrand(req, res) {
    try {
      // Create a new brand
      const brand = await brandModel.create(req.body);
      return res.status(201).json(brand);
    } catch (error) {
      // Return an error response if brand creation fails
      return res.status(404).json({ error: "Can not add brand", error });
    }
  }

  /**
   * Retrieve all brands from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getAllBrands(req, res) {
    // Find all brands
    const brands = await brandModel.find();
    return res.status(200).json(brands);
  }

  /**
   * Update a brand in the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async updateBrand(req, res) {
    // TO DO: Implement brand update logic
  }

  /**
   * Delete a brand from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async deleteBrand(req, res) {
    // TO DO: Implement brand delete logic
  }
}

/**
 * Create a new instance of the BrandController class
 */
const brandController = new BrandController();

/**
 * Export the BrandController instance
 */
export default brandController;