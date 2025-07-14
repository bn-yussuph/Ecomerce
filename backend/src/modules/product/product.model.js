/**
 * Import required modules
 */
import { Schema, model } from "mongoose"; // Mongoose library for MongoDB interactions

/**
 * Define the Mongoose schema for the product model
 */
const productSchema = new Schema({
  /**
   * Product title
   */
  title: {
    type: String, // Data type for the title field
    required: true, // Whether the title field is required
    unique: true, // Ensure product titles are unique
    trim: true, // Trim whitespace from the title field
    minLength: [3, "Too Short product Name"], // Minimum length for the title field
  },

  /**
   * Product cover image
   */
  imgCover: {
    type: String, // Data type for the cover image field
  },

  /**
   * Product images
   */
  images: {
    type: [String], // Data type for the images field (array of strings)
  },

  /**
   * Product description
   */
  description: {
    type: String, // Data type for the description field
    maxlength: [100, "Description should be less than or equal to 100"], // Maximum length for the description field
    minlength: [10, "Description should be more than or equal to 10"], // Minimum length for the description field
    required: true, // Whether the description field is required
    trim: true, // Trim whitespace from the description field
  },

  /**
   * Product price
   */
  price: {
    type: Number, // Data type for the price field
    default: 0, // Default value for the price field
    min: 0, // Minimum value for the price field
    required: true, // Whether the price field is required
  },

  /**
   * Product price after discount
   */
  priceAfterDiscount: {
    type: Number, // Data type for the price after discount field
    default: 0, // Default value for the price after discount field
    min: 0, // Minimum value for the price after discount field
  },

  /**
   * Product quantity
   */
  quantity: {
    type: Number, // Data type for the quantity field
    default: 0, // Default value for the quantity field
    min: 0, // Minimum value for the quantity field
  },

  /**
   * Product sold count
   */
  sold: {
    type: Number, // Data type for the sold count field
    default: 0, // Default value for the sold count field
    min: 0, // Minimum value for the sold count field
  },

  /**
   * Product category
   */
  category: {
    type: Schema.ObjectId, // Data type for the category field (ObjectId)
    ref: "category", // Reference to the category model
    required: true, // Whether the category field is required
  },

  /**
   * Product subcategory
   */
  subcategory: {
    type: Schema.ObjectId, // Data type for the subcategory field (ObjectId)
    ref: "subcategory", // Reference to the subcategory model
    required: true, // Whether the subcategory field is required
  },

  /**
   * Product brand
   */
  brand: {
    type: Schema.ObjectId, // Data type for the brand field (ObjectId)
    ref: "brand", // Reference to the brand model
    required: true, // Whether the brand field is required
  },

  /**
   * Product rating average
   */
  ratingAvg: {
    type: Number, // Data type for the rating average field
    min: 1, // Minimum value for the rating average field
    max: 5, // Maximum value for the rating average field
  },

  /**
   * Product rating count
   */
  ratingCount: {
    type: Number, // Data type for the rating count field
    min: 0, // Minimum value for the rating count field
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
  toJSON: { virtuals: true }, // Include virtual fields in JSON output
  toObject: { virtuals: true }, // Include virtual fields in object output
});

/**
 * Post initialization hook to modify the product document
 */
productSchema.post('init', function (doc) {
  console.log("post init()");
  if (doc.imgCover && doc.images) {
    // Prepend the base URL to the image paths
    doc.imgCover = `${process.env.BASE_URL}products/${doc.imgCover}`;
    doc.images = doc.images.map((ele) => {
      return `${process.env.BASE_URL}products/${ele}`;
    });
  }
});

/**
 * Define a virtual field for product reviews
 */
productSchema.virtual('reviews', {
  ref: 'review', // Reference to the review model
  localField: '_id', // Local field to match with the foreign field
  foreignField: 'productId', // Foreign field in the review model
});

/**
 * Pre-find hook to populate the reviews virtual field
 */
productSchema.pre(['find', 'findOne'], function () {
  // Populate the reviews virtual field for each product document
  this.populate('reviews');
});

/**
 * Create the Mongoose model for the product schema
 */
export const productModel = model("product", productSchema);


