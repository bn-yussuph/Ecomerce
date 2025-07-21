import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'user'
    },
    cartItems:[
        {
            productId:{type: mongoose.Schema.ObjectId, ref : "product"},
            quantity:{
              type:Number,
              default:1
            },
            price:Number,
            totalProductDiscount:Number
          }
    ],
    shippingAddress:{
        street:String,
        city:String,
        phone:Number
    },
    paymentMethod:{
        type:String,
        enum:['card','cash'],
        default:'cash'
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    paidAt:Date,
    deliveredAt:Date
});

const orderModel = mongoose.model('order',orderSchema)

export default orderModel;