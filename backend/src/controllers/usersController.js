import sha1 from "sha1";
import User from "../models/User.js";

class UsersController {
    async register (req, res) {
        // console.log(req.body);
        const { name, email, password } = req.body;

        if (!name) {
            return res.status(201).json({ "error": "Missing name" });
        }
        if (!email) {
            return res.status(201).json({ "error": "Missing email" });
        }
        if (!password) {
            return res.status(201).json({ "error": "Missing pasword" });
        }
        try {
            const user = await User.findOne({email: email});
            if (user){
                return res.status(400).json({ "error": "User already exist!"})
            } else {
                const hp = sha1(password);
                const data = {name: name, email: email, password: hp};
                const newUser = await User.create(data);
                const response = {id: newUser._id, name: newUser.name, email: newUser.email };
                return res.status(201).json(response);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error"});
        }
    }
}

const usersController = new UsersController();

export default usersController;