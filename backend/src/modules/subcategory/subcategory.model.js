/**
 * Import required modules
 */
import mongoose from "mongoose"; // Mongoose library for MongoDB interactions

/**
 * Define the Mongoose schema for the subcategory model
 */
const subCategorySchema = new mongoose.Schema({
  /**
   * Subcategory name
   */
  name: {
    type: String, // Data type for the name field
    required: true, // Whether the name field is required
    minLength: [2, "Too Short"], // Minimum length for the name field
    unique: true, // Ensure subcategory names are unique
    trim: true, // Trim whitespace from the name field
  },

  /**
   * Subcategory description
   */
  description: {
    type: String, // Data type for the description field
    lowercase: true, // Convert description to lowercase
  },

  /**
   * Category ID associated with the subcategory
   */
  category: {
    type: mongoose.Schema.ObjectId, // Data type for the category ID field (ObjectId)
    required: true, // Whether the category ID field is required
    ref: "category", // Reference to the category model
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

/**
 * Create and export the Mongoose model for the subcategory schema
 */
export const subCategoryModel = mongoose.model("subcategory", subCategorySchema);