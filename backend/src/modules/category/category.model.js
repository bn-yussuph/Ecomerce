import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [4, "Too Short"],
      unique: true,
      trim: true,
    },
    sldeug: {
      type: String,
      lowercase: true,
    },
    Image: {
      type: String,
    },
  },
  { timestamps: true }
);
categorySchema.post('init',function(doc){
  doc.Image = `${process.env.BASE_URL}category/${doc.Image}`
  console.log(doc);

})
export const categoryModel = mongoose.model("category", categorySchema);
