import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import router from "./routes/router.js";
import connect_db from './models/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

connect_db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

app.listen(PORT);