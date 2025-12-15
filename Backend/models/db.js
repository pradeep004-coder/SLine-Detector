import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURL = process.env.MONGO_CONN ;

const connect_db = () => {
  mongoose.connect(mongoURL)
  .then(()=> console.log("Connection successful."))
  .catch((err)=> console.log("Connection Failed.", err))
}

export default connect_db;