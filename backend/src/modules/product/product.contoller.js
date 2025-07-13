import { productModel } from "./product.model.js";

class ProductsController {
    async addProduct(req, res) {
        try {
            // console.log(req.body);
            const product = await productModel.create(req.body);
            return res.status(201).json({message: "successfully added a product", ...product});
        } catch (error) {
            return res.status(400).json({ error: "Can not add product", error});
        }
    }

    async getAllProducts(req, res) {
        let products = await productModel.find();
        return res.status(200).json({products});
    }

    async getProduct(req, res) {
        return res.send("From get a product");
    }

    async updateProduct(req, res){
        return res.send("From update product");
    }

    async deleteProduct(req, res){
        return res.send("From delete product");
    }
}

const productsController = new ProductsController();

export default productsController;