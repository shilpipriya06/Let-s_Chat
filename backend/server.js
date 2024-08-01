import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth_routes.js";
import userRoutes from "./routes/user_routes.js"
import messageRoutes from "./routes/message_routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());// tp parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
//app.get("/",(req,res)=>{
   // res.send("Hello World!!");
app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});