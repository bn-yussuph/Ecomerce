import orderModel from "./order.model.js";

class OrderController {
    async getAllOrders(req, res){
        return res.send({ message: "from get all orders"})
    }

    async getSpecificOrde(req, res){
        return res.send({ message: "from get specific orders"})
    }
}

const orderController = new OrderController();
export default orderController;