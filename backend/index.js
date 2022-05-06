import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
//import bodyParser from "body-parser";
const app = express();

//app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use("/users",userRouter); //http://localhost:5000/users/signup
app.use("/tour",tourRouter);

const MONGODB_URL ="mongodb+srv://chamika:NIIMDsDDrpk2NJMf@cluster0.ipd5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = 5000;

mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
}).catch((error)=>console.log(`${error} did not connect`))

//password-'NIIMDsDDrpk2NJMf'
//mongodb+srv://chamika:<password>@cluster0.ipd5w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


