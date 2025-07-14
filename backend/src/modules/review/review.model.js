/**
 * Import required modules
 */
import mongoose from "mongoose"; // Mongoose library for MongoDB interactions

/**
 * Define the Mongoose schema for the review model
 */
const reviewSchema = new mongoose.Schema({
  /**
   * Review text
   */
  text: {
    type: String, // Data type for the text field
    trim: true, // Trim whitespace from the text field
    required: true, // Whether the text field is required
  },

  /**
   * Product ID associated with the review
   */
  productId: {
    type: mongoose.Schema.ObjectId, // Data type for the product ID field (ObjectId)
    ref: "product", // Reference to the product model
    required: true, // Whether the product ID field is required
  },

  /**
   * User ID associated with the review
   */
  userId: {
    type: mongoose.Schema.ObjectId, // Data type for the user ID field (ObjectId)
    ref: "user", // Reference to the user model
    required: true, // Whether the user ID field is required
  },

  /**
   * Rating associated with the review
   */
  rate: {
    type: Number, // Data type for the rate field
    default: 1, // Default value for the rate field
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

/**
 * Pre-find hook to populate the user ID field with user name
 */
reviewSchema.pre(['find', 'findOne'], function () {
  // Populate the user ID field with user name (excluding _id)
  this.populate('userId', 'name -_id');
});

/**
 * Create and export the Mongoose model for the review schema
 */
export const reviewModel = mongoose.model("review", reviewSchema);