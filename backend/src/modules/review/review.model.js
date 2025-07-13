import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "product",
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
    rate: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(['find','findOne'],function (){
  this.populate('userId','name -_id')
})

export const reviewModel = mongoose.model("review", reviewSchema);
