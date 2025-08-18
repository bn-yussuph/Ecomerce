import { Router } from "express";

import orderController from "./order.controller.js";

const orderRouter = Router();

orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/checkout/:id', orderController.createCheckoutSession);
orderRouter.get('/:id', orderController.getSpecificOrder);

export default orderRouter;