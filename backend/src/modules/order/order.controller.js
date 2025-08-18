import cartModel from "../cart/cart.model.js";
import orderModel from "./order.model.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET)

class OrderController {
    // constructor(){
    //     this.stripe = new Stripe(process.env.STRIPE_SECRET)
    // }

    async getAllOrders(req, res){
        const orders = await orderModel.find()
                                .populate("cartItem.productId");
        return res.status(200).json({ message: "success", orders})
    }

    async getSpecificOrder(req, res){
        const order = await orderController.findOne( {userId: req.user._id} );
        return res.status(200).json({ message: "success", order })
    }

    async createCheckoutSession(req, res){
        try {
            const { id } = req.params;
            // console.log(id);
            let cart = await cartModel.findById(id);
            if (!cart){
                res.status(404).json({ error: "no cart found"});
            }
            let items = [];
            cart.cartItem.forEach(element => {
                let item = {
                    price_data: {
                        currency: 'USD',
                        product_data: {
                            name: 'Test name',
                        },
                        unit_amount: element.price * 100
                    },
                    quantity: element.quantity
                }
                items.push(item);
            });
            console.log(items);
            const session = await stripe.checkout.sessions.create({
                // line_items : [
                //     {
                //         price_data: 
                //         {
                //             currency: 'USD',
                //             product_data: {
                //                 name: 'Test product'
                //             },
                //             unit_amount: 10 * 100
                //         },
                //         quantity: 5
                // }
                // ],
                line_items: items,
                mode: 'payment',
                success_url: 'http://localhost:5000/api/oders',
                cancel_url: 'http://localhost:5000/api/oders'
            });
            res.status(200).json({ message: "success", cart, session });
            
        } catch (error) {
            console.log(error);
            res.send("Internal server error");
        }
    }
}

const orderController = new OrderController();
export default orderController;