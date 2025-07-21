import swaggerJSDoc from "swagger-jsdoc";
import swaggerSchemas from "./swaggerSchema.js";
// import { version } from "bucklescript/compiler";

const options = {
  definition: {
    swagger: "2.0",
    info: {
        title: 'Ecommerce Application ',
        version: '1.0.0',
        description: 'Ecommerce application API',
      },
    host: 'localhost:5000', // Your API host
    schemes: ['http', 'https'],
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["../bootstrap.js"],
};

const config = {
    definition: {
      swagger: '2.0',
      info: {
        title: 'Ecommerce Application ',
        description: 'Ecommerce application API',
        version: '1.0'
      },
      host: '',                                   // by default: 'localhost:3000'
      basePath: '/',                              // by default: '/'
      consumes: ['application/json'],             // by default: ['application/json']
      produces: ['application/json'],             // by default: ['application/json']
      tags: [                                     // by default: empty Array
        {
          name: 'Users',                               // Tag name
          description: 'For all users'                         // Tag description
        },
      ],
      securityDefinitions: {},                    // by default: empty object
      host: 'localhost:5000',                     // Your API host
      schemes: ['http', 'https'],
      definitions: {
        ...swaggerSchemas,
      }
    },
    apis: ['./src/modules/user/usersRouter.js',
            './src/modules/auth/authRouters.js',
            './src/modules/brand/brand.routes.js',
            './src/modules/cart/cart.routes.js',
            './src/modules/category/category.routes.js',
            './src/modules/order/order.router.js',
            './src/modules/product/product.routes.js',
            './src/modules/review/review.routes.js',
            './src/modules/subcategory/subcategory.routes.js'
          ]
    };

const swaggerDoc = swaggerJSDoc(config);

export default swaggerDoc;