import userModel from "../user/user.model.js";
import sha1 from "sha1";
import { v4 } from "uuid";
import redisClient from "../../utils/redis.js";

class AuthController {
    async signUp(req, res){
        const { name, email, password } = req.body;
        if (!req.body.name) {
            return res.status(201).json({ "error": "Missing name" });
        }
        if (!req.body.email) {
            return res.status(201).json({ "error": "Missing email" });
        }
        if (!req.body.password) {
            return res.status(201).json({ "error": "Missing password" });
        }
        try {
            const user = await userModel.findOne({email: req.body.email});
            if (user){
                return res.status(400).json({ "error": "User already exist!"})
            } else {
                const newUser = await userModel.create(req.body);
                const response = {id: newUser._id, name: newUser.name, email: newUser.email, user: newUser };
                return res.status(201).json(response);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error"});
        }
    }

    async login(req, res){
        const auth = req.headers.authorization;
        const authVal = auth.split(' ')[1];
        const [ email, password ] = Buffer.from(authVal, 'base64').toString().split(':');
        const hp = sha1(password);

        const user = await userModel.findOne({ email: email });
        if(!user) {
            return res.status(401).json({ error: "You are not a registered user!"});
        }
        if (user.password !== hp){
            return res.status(401).json({ error: "Wrong password"});
        }
        const token = v4();
        const authTokenKey = `auth_${token}`;
        await redisClient.set(authTokenKey, user._id.toString(), 60 * 60 * 24);
        return res.status(200).json({ "token": token });
    }

    async logout(req, res){
        const token = req.header('X-Token');
        if (!token) {
            return res.status(401).json({ error: "Unautorized"});
        }

        const key = `auth_${token}`;
        const userId = await redisClient.get(key);

        const user = userModel.findById({_id: userId});
        if(!user){
            return res.status(401).json({ error: "Unauthorized"});
        } else {
            await redisClient.del(key);
            res.status(204).send();
        }
    }
}

const authController = new AuthController();

export default authController;