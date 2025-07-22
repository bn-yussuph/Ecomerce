import { productModel } from "../product/product.model.js"
import cartModel from "./cart.model.js"

class CartController {
    static calculateTotalPrice(cart){
        let totalPrice = 0;
        cart.cartItem.forEach(element => {
            totalPrice += element.quantity * element.price;
        });
        cart.totalPrice = totalPrice;
    }

    async addProductToCart(req, res){
        // let id = req.body.user._id;
        try {
            // find the product
            const product = await productModel
                                .findById(req.body.productId)
                                .select("price");
            if(!product){
                return res.status(404).json({ error: "Product not found"});
            }
            // check if user already has a cart
            let cart = await cartModel.findOne({ userId: req.user._id });

            // if no cart, create a new one and add the product
            if(!cart){
                // cart = await cartModel.create({ userId: req.body.user._id, cartItem: [req.body] });
                cart = await cartModel.create({ userId: req.user._id, cartItem: [req.body] });
                CartController.calculateTotalPrice(cart);
            }

            // if cart exist
            // check if item alread exist in cart, then incease the quantity by one
            // else add the item to the cart
            let itemExist = cart.cartItem.find((item) => {
                return item.productId == req.body.productId;
            });

            if(itemExist){
                itemExist.quantity += req.body.quantity || 1;
            } else{
                cart.cartItem.push(req.body);
            }
            CartController.calculateTotalPrice(cart);
            await cart.save();
            return res.status(200).json({ message: "success", cart});
        } catch (error) {
            console.log(error);
            res.status(504).json({ error: "Internal server error"});
        }
    }

    async removeProductFromCart(req, res){
        // find the cart using the user id
        // remove the product from cart using the product id
        let { id } = req.params.id;
        console.log(id);
        let cart = await cartModel.findByIdAndUpdate(
            { userId: req.user._id },
            { $pull: { cartItem: { _id: id }}},
            { new: true })
        return res.status(201).json({ deleted: cart })
    }
    async updateProductQuantity(req, res){
        return res.send({ message: "from update product in cart"})
    }
    async getLoggedUserCart(req, res){
        const cart = await cartModel.findOne(req.params);
        return res.status(200).json({ cart: cart});
    }
    async applyCoupon(req, res){
        return res.send({ message: "from apply coupon to cart"})
    }
}

const cartController = new CartController();
export default cartController;