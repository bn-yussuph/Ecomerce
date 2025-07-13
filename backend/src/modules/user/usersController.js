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
            const user = await userModel.findOne({email: req.body.email});
            if (user){
                return res.status(400).json({ "error": "User already exist!"})
            } else {
                const newUser = await userModel.create(req.body);
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

    async updateUser(req, res){
        let { id } = req.params;
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser){
            return res.status(404).json({ message: "can not update user" });
        }
        return res.status(201).json({ updatedUser });
    }

    async getUserBy(req, res){
        const key = req.params;
        console.log(key);
        const user = await userModel.findOne({ key });

        if(!user){
            return res.status(404).json({ result: "No user found!"})
        }
        return res.status(200).json({ result : "success", user });
    }

    async deleteUser(req, res){
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id, { new: true})

        if(!deletedUser) {
            return res.status(404).json({ error: "No User found", deletedUser})
        }

        res.status(201).json({ ...deletedUser });
    }

    async deleteAll(req, res){
        let result = await userModel.deleteMany();
        if (result){
            return res.status(200).json({ "status": "Delete all users successful", result});
        }
        return res.status(201).json({ "status": "Delete all users not successful"});
    }
}

const usersController = new UsersController();

export default usersController;