import authRouter from "./modules/auth/authRouters.js";
import brandsRouter from "./modules/brand/brand.routes.js";
import categoryRouter from "./modules/category/category.routes.js";
import productsRouter from "./modules/product/product.routes.js";
import reviewRouter from "./modules/review/review.routes.js";
import subcategoryRouter from "./modules/subcategory/subcategory.routes.js";
import usersRouter from "./modules/user/usersRouter.js";

const bootstrap = (app) => {

    app.use('/api/auth', authRouter)
    app.use('/api/users', usersRouter);
    app.use('/api/products', productsRouter);
    app.use('/api/brand', brandsRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/subcategory', subcategoryRouter)
    app.use('/api/review', reviewRouter)


    app.all('*', (req, res, next) => {
        return res.status(404).json({ error: "No route found"});
    })
}

export default bootstrap;