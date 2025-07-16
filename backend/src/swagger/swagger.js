    import swaggerAutogen from 'swagger-autogen';
    import swaggerSchemas from './swaggerSchema.js';

    const outputFile = './swagger.json'; // Output file for Swagger JSON
    /* const endpointsFiles = ['./modules/auth/authRouters.js',
                            './modules/brand/brand.routes.js',
                            './modules/category/category.routes.js',
                            './modules/product/product.routes.js',
                            './modules/review/review.routes.js',
                            './modules/subcategory/subcategory.routes.js',
                            './modules/user/usersRouter.js',
                          ]; // Array of paths to your route files
                          */
    const endpointsFiles = ['../bootstrap.js'];

    const config = {
      info: {
        title: 'Ecommerce Application ',
        description: 'Ecommerce application API',
      },
      host: '',                                   // by default: 'localhost:3000'
      basePath: '/',                              // by default: '/'
      consumes: ['application/json'],             // by default: ['application/json']
      produces: ['application/json'],             // by default: ['application/json']
      tags: [                                     // by default: empty Array
        {
          name: '',                               // Tag name
          description: ''                         // Tag description
        },
        // { ... }
      ],
      securityDefinitions: {},                    // by default: empty object
      host: 'localhost:5000',                     // Your API host
      schemes: ['http', 'https'],
      definitions: {
        ...swaggerSchemas,
      }
    };

    swaggerAutogen(outputFile, endpointsFiles, config);