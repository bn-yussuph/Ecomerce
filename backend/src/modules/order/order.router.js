import { Router } from "express";

import orderController from "./order.controller.js";

const orderRouter = Router();

orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:id', orderController.getSpecificOrde);

export default orderRouter;