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
// import swaggerJsdoc from "swagger-jsdoc";
import swagger from "./swagger/swagger.json" assert { type: "json"};

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//         title: 'Ecommerce Application ',
//         description: 'Ecommerce application API',
//       },
//     host: 'localhost:5000', // Your API host
//     schemes: ['http', 'https'],
//     servers: [
//       {
//         url: "http://localhost:5000",
//       },
//     ],
//   },
//   apis: ["./modules/user/*.js"],
// };

// const specs = swaggerJsdoc(options);


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
  app.use('/api/users', usersRouter);
  app.use('/api/products', productsRouter);
  app.use('/api/brand', brandsRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/subcategory', subcategoryRouter);
  app.use('/api/review', reviewRouter);

  // console.log(swagger);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger, {explorer: true}));

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