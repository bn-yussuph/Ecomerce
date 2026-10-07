/**
 * Import required modules
 */
import express from "express"; // Express.js framework
import productsController from "./product.contoller.js"; // Product controller for handling product-related operations
import { uploadMultipleFiles } from "../../middlewares/multer/multer.js";

/**
 * Create a new Express router instance for product routes
 */
const productsRouter = express.Router();
let fields = [
  { name: "imgCover", maxCount: 1 },
  { name: "images", maxCount: 20 },
]

/**
 * Define product routes
 */

productsRouter.get("/", productsController.getAllProducts); // Retrieve all products
productsRouter.get("/:id", productsController.getProduct); // Retrieve a product by ID

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
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
 *               $ref: '#/definitions/Product'
 *       400:
 *         description: Bad Request
 *
 */
productsRouter.post("/",
                    uploadMultipleFiles(fields, 'products'),
                    productsController.addProduct); // Create a new product
productsRouter.put("/:id", productsController.updateProduct); // Update a product by ID
productsRouter.delete("/:id", productsController.deleteProduct); // Delete a product by ID

/**
 * Export the products router
 */
export default productsRouter;
