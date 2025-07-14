/**
 * Import required modules
 */
import { productModel } from "./product.model.js"; // Product model for database interactions

/**
 * Define a class to manage product-related operations
 */
class ProductsController {
  /**
   * Add a new product to the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async addProduct(req, res) {
    try {
      // Create a new product
      const product = await productModel.create(req.body);
      return res.status(201).json({ message: "Successfully added a product", ...product });
    } catch (error) {
      // Return an error response if product creation fails
      return res.status(400).json({ error: "Can not add product", error });
    }
  }

  /**
   * Retrieve all products from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getAllProducts(req, res) {
    // Find all products
    let products = await productModel.find();
    return res.status(200).json({ products });
  }

  /**
   * Retrieve a product by ID
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getProduct(req, res) {
    // TO DO: Implement product retrieval logic
    return res.send("From get a product");
  }

  /**
   * Update a product in the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async updateProduct(req, res) {
    // TO DO: Implement product update logic
    return res.send("From update product");
  }

  /**
   * Delete a product from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async deleteProduct(req, res) {
    // TO DO: Implement product delete logic
    return res.send("From delete product");
  }
}

/**
 * Create a new instance of the ProductsController class
 */
const productsController = new ProductsController();

/**
 * Export the ProductsController instance
 */
export default productsController;