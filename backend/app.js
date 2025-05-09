import express from "express"
import dotenv from "dotenv"

import { dbConnect } from "./database/dbConnection.js";
import userRouter from "./routes/userRoutes.js";
import jobRouter from "./routes/jobRoutes.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import applicationRouter from "./routes/applicationRoutes.js"
import fileUpload from "express-fileupload";
dotenv.config()
dbConnect();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir: "./tmp"
    })
)

app.use("/api/v1/user",userRouter);
app.use("/api/v1/job",jobRouter);
app.use("/api/v1/application",applicationRouter)

app.use(errorMiddleware);
export default app;