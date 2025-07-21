import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    cartItem: [
      {
        productId: {type:mongoose.Schema.ObjectId, ref : "product"},
        quantity: {
          type: Number,
          default:1
        },
        price: Number,
        totalProductDiscount: Number
      }
    ],
    totalPrice: {type: Number,
                default: 0
                },
    totalPriceAfterDiscount: {type: Number,
                default: 0
                },
    discount: {type: Number,
                default: 0
                }
  },
  {
    timestamps: true,
  }
);

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
