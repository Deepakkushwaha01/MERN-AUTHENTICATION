import  express  from "express";
import dotenv  from 'dotenv'; 
import db from "./db/connect.js";
import router from "./Router/Routes.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app=express();

dotenv.config();  

db();

app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","GET"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(router);



const port=process.env.PORT||8000;   
app.listen(port,()=>{
    console.log(`Server is starting on port ${port}`)
});