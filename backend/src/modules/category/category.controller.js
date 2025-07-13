import { categoryModel } from "./category.model.js";

class CategoryController {
    async addCategory(req, res){
        try {
            const category = await categoryModel.create(req.body);
            return res.status(201).json(category)
        } catch (error) {
            return res.status(404).json({ error: "Can not add category", error })
        }
    }

    async getAllCategories(req, res){
        const categories = await categoryModel.find();
        return res.status(200).json(categories);
    }

    async updateCategory(req, res){}

    async deleteCategory(req, res){}
}

const categoryController = new CategoryController();

export default categoryController;