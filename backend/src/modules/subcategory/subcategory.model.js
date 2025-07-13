import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [2, "Too Short"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "category",
    },
  },
  { timestamps: true }
);

export const subCategoryModel = mongoose.model("subcategory", subCategorySchema);
