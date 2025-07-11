import authRouter from "./modules/auth/authRouters.js";
import usersRouter from "./modules/user/usersRouter.js";

const bootstrap = (app) => {

    app.use('/api/auth', authRouter)
    app.use('/api/users', usersRouter);


    app.all('*', (req, res, next) => {
        return res.status(404).json({ error: "No route found"});
    })
}

export default bootstrap;