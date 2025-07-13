import { brandModel } from "./brand.model.js";

class BrandController {
    async addBrand(req, res){
        try {
                const brand = await brandModel.create(req.body);
                return res.status(201).json(brand)
            } catch (error) {
                return res.status(404).json({ error: "Can not add brand", error })
            }
    }

    async getAllBrands(req, res){
        const brands = await brandModel.find();
        return res.status(200).json(brands);
    }

    async updateBrand(req, res){}

    async deleteBrand(req, res){}
}

const brandController = new BrandController();

export default brandController;