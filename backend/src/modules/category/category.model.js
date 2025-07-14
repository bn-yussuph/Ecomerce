/**
 * Import required modules
 */
import mongoose from "mongoose"; // Mongoose library for MongoDB interactions

/**
 * Define the Mongoose schema for the category model
 */
const categorySchema = new mongoose.Schema({
  /**
   * Category name
   */
  name: {
    type: String, // Data type for the name field
    required: true, // Whether the name field is required
    minLength: [4, "Too Short"], // Minimum length for the name field
    unique: true, // Ensure category names are unique
    trim: true, // Trim whitespace from the name field
  },

  /**
   * Category description
   */
  description: {
    type: String, // Data type for the description field
    lowercase: true, // Convert description to lowercase
  },

  /**
   * Category image
   */
  Image: {
    type: String, // Data type for the image field
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

/**
 * Post initialization hook to modify the category document
 */
categorySchema.post('init', function (doc) {
  // Prepend the base URL to the image path
  doc.Image = `${process.env.BASE_URL}category/${doc.Image}`;
  console.log(doc);
});

/**
 * Create the Mongoose model for the category schema
 */
export const categoryModel = mongoose.model("category", categorySchema);