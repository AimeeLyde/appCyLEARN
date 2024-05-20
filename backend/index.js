import express, { json } from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import pkg from 'bcryptjs'
const { compareSync } = pkg
import authRoute from "./Routes/auth.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/', (req,res)=>{
    res.send("Api fonctionne");
});

//database connection
mongoose.set('strictQuery', false);

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected");

    }catch(err){
        console.log("DB non connecté");
    }
}

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute) 
app.listen(port,()=>{
    connectDB()
    console.log("Server fonctionne sur le port"+port);
})