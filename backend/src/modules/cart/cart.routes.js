import express from "express";
import cartController from "./cart.controller.js";

const cartRouter = express.Router();

/**
 * Define user routes
 */
cartRouter.post("/", cartController.addProductToCart);
cartRouter.get("/", cartController.getLoggedUserCart);
cartRouter.post("/apply-coupon", cartController.applyCoupon);
cartRouter.put("/:id", cartController.updateProductQuantity);
cartRouter.delete("/:id", cartController.removeProductFromCart);

/**
 * Export the users router
 */
export default cartRouter;