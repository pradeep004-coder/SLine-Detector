import userModel from "../models/schema.js";

const storeInDB = async (req, res) => {
    try {
        const {name, age, gender, SLine} = req.body;
        const user = await userModel.findOne({name, age, gender});
        if (user) {
            return res.status(204).json({message: "old user", success: true});
        }
        const newEntry = new userModel({name, age, gender, SLine});
        await newEntry.save();
        return res.status(201).json({ message: "New entry created.", success: true});
    } catch (error) {
        res.status(500).json({ message: 'internal server error', success: false });
    }
}

export default storeInDB;