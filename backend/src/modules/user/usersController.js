import sha1 from "sha1";
import userModel from "./user.model.js"

class UsersController {
    async addUser (req, res) {
        // console.log(req.body);
        if (!req.body.name) {
            return res.status(201).json({ "error": "Missing name" });
        }
        if (!req.body.email) {
            return res.status(201).json({ "error": "Missing email" });
        }
        if (!req.body.password) {
            return res.status(201).json({ "error": "Missing pasword" });
        }
        try {
            const user = await userModel.findOne({email: email});
            if (user){
                return res.status(400).json({ "error": "User already exist!"})
            } else {
                const newUser = await userModel.create(data);
                const response = { user: newUser };
                return res.status(201).json(response);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error"});
        }
    }

    async getAllUsers (req, res) {
        const users = await userModel.find();
        const response = {message: "Success", users: users};

        res.status(201).json(response);
    }

    async deleteUser(req, res){
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id, { new: true})

        if(!deletedUser) {
            res.status(404).json({ error: "No User found"})
        }

        res.status(201).json({ ...deletedUser });
    }
}

const usersController = new UsersController();

export default usersController;