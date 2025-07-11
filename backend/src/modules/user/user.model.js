import mongoose from "mongoose";
import sha1 from "sha1";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    address: [{
      city:String,
      street:String,
      phone:String
    }],
    active: { 
        type:Boolean,
        default: true
    },
    verified: { 
        type:Boolean,
        default: false
    },
    blocked: { 
        type:Boolean,
        default: false
    }
}, { timestamps: true });

userSchema.pre("save", function () {
  this.password = sha1(this.password);
});

const userModel = mongoose.model('user', userSchema);

export default userModel;