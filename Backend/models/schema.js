import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    SLine: {type: Number, required: true}
});

const model = mongoose.model("SLine", schema);
export default model;