/**
 * Import required modules
 */
import mongoose from "mongoose"; // Mongoose library for MongoDB interactions

/**
 * Define the Mongoose schema for the brand model
 */
const brandSchema = new mongoose.Schema({
  /**
   * Brand name
   */
  name: {
    type: String, // Data type for the name field
    required: true, // Whether the name field is required
    unique: true, // Ensure brand names are unique
    trim: true, // Trim whitespace from the name field
  },

  /**
   * Brand description
   */
  description: {
    type: String, // Data type for the description field
    lowercase: true, // Convert description to lowercase
  },

  /**
   * Brand logo
   */
  logo: {
    type: String, // Data type for the logo field
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

/**
 * Create the Mongoose model for the brand schema
 */
export const brandModel = mongoose.model("brand", brandSchema);