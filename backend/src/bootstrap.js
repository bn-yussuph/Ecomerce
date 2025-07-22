/**
 * Import module routers
 */
import authRouter from "./modules/auth/authRouters.js";
import brandsRouter from "./modules/brand/brand.routes.js";
import categoryRouter from "./modules/category/category.routes.js";
import productsRouter from "./modules/product/product.routes.js";
import reviewRouter from "./modules/review/review.routes.js";
import subcategoryRouter from "./modules/subcategory/subcategory.routes.js";
import usersRouter from "./modules/user/usersRouter.js";

import swaggerUi from "swagger-ui-express";
// import swaggerDoc from "./swagger/swaggerDoc.js";
import cartRouter from "./modules/cart/cart.routes.js";
import orderRouter from "./modules/order/order.router.js";
import swagger from "./swagger/swagger.json" with { type: "json"};
import authController from "./modules/auth/authController.js";

/**
 * Bootstrap function to configure Express app routes
 * 
 * @param {Express.Application} app - The Express app instance
 */
const bootstrap = (app) => {
  /**
   * Configure API routes
   */
  app.use('/api/auth', authRouter);
  app.use('/api/users', [authController.loggedIn], usersRouter);
  app.use('/api/products', [authController.loggedIn], productsRouter);
  app.use('/api/brand', [authController.loggedIn], brandsRouter);
  app.use('/api/category', [authController.loggedIn], categoryRouter);
  app.use('/api/subcategory', [authController.loggedIn], subcategoryRouter);
  app.use('/api/review', [authController.loggedIn], reviewRouter);
  app.use('/api/cart', [authController.loggedIn], cartRouter);
  app.use('/api/order', [authController.loggedIn], orderRouter);

  // console.log(swagger);
  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc, {explorer: true})); // manual swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger, {explorer: true})); //autogen

  /**
   * Catch-all route for handling unknown requests
   */
  app.all('*', (req, res, next) => {
    return res.status(404).json({ error: "No route found"});
  });
};

/**
 * Export the bootstrap function
 */
export default bootstrap;