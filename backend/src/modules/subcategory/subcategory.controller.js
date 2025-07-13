import { subCategoryModel } from "./subcategory.model.js";

class SubCategoryController {
    async addSubCategory(req, res){
        try {
                const subcategory = await subCategoryModel.create(req.body);
                return res.status(201).json(subcategory)
            } catch (error) {
                return res.status(404).json({ error: "Can not add category", error })
                }
    }

    async getAllSubCategories(req, res){
        const subcategories = await subCategoryModel.find();
            return res.status(200).json(subcategories);
    }

    async updateSubCategory(req, res){}

    async deleteSubCategory(req, res){}
}

const subcategoryController = new SubCategoryController();

export default subcategoryController;