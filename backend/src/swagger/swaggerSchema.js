import m2s from "mongoose-to-swagger";
import { brandModel } from "../modules/brand/brand.model.js";
import { categoryModel } from "../modules/category/category.model.js";
import { productModel } from "../modules/product/product.model.js";
import { reviewModel } from "../modules/review/review.model.js";
import { subCategoryModel } from "../modules/subcategory/subcategory.model.js";
import userModel from "../modules/user/user.model.js";

const swaggerSchemas = {
        User: m2s(userModel),
        Brand: m2s(brandModel),
        Category: m2s(categoryModel),
        Product: m2s(productModel),
        Review: m2s(reviewModel),
        Subcategory: m2s(subCategoryModel),
    };

    export default swaggerSchemas;