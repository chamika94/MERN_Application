import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const MONGODB_URL ="mongodb+srv://chamika:NIIMDsDDrpk2NJMf@cluster0.ipd5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = 5000;

mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
}).catch((error)=>console.log(`${error} did not connect`))




//password-'NIIMDsDDrpk2NJMf'
//mongodb+srv://chamika:<password>@cluster0.ipd5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://chamika:<password>@cluster0.ipd5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

