import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      lowercase: true,
    },
    logo: {
      type: String,
    },
  },
  { timestamps: true }
);

export const brandModel = mongoose.model("brand", brandSchema);
