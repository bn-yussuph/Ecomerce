/**
 * Import required modules
 */
import { productModel } from "./product.model.js"; // Product model for database interactions

/**
 * Define a class to manage product-related operations
 */
class ProductsController {
 
  async addProduct(req, res) {
    try {
      console.log(req.files);
      req.body.imgCover = req.files.imgCover[0].filename;
      req.body.images = req.files.images.map((element) => element.filename);
      // Create a new product
      const product = await productModel.create(req.body);
      return res.status(201).json({ message: "Successfully added a product", ...product });
    } catch (error) {
      // Return an error response if product creation fails
      console.log(error);
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
    try {
      // Find all products
      let products = await productModel.find();
      return res.status(200).json({ products });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: error });
    }
  }

  /**
   * Retrieve a product by ID
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async getProduct(req, res) {
    try {
      const { id } = req.params;
      let product = await productModel.findById(id);
      res.status(200).json({ message: "success", product });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "failure! product not found."})
    }
  }

  /**
   * Update a product in the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async updateProduct(req, res) {
    try {
      let { id } = req.params;
      const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(201).json({ message: "success", updatedReview });
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Delete a product from the database
   * 
   * @async
   * @param {Express.Request} req - The incoming request
   * @param {Express.Response} res - The outgoing response
   */
  async deleteProduct(req, res) {
    try {
      let { id } = req.params;
      let deletedProduct = await productModel.findByIdAndDelete(id);
      return res.status(201).json({ message: "success", deletedProduct }); 
    } catch (error) {
      console.log(error);
      return res.status(404).json({error: "can not delete product"})
    }
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


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: Product name
 *         description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           description: Product price
 *       example:
 *         name: Product 1
 *         description: This is product 1
 *         price: 10.99
 *
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request
 *
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/swagger/swaggProduct'
 *
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       204:
 *         description: Product deleted successfully
 */