import express from "express";
const router = express.Router();
import {getAllJobs,
    postJob,
    getMyJobs,
    updateJob,
    deleteJob,
    getSingleJob
    } from "../controllers/jobController.js"
import { isAuthenticated } from "../middlewares/auth.js";

router.get("/getall",getAllJobs);
router.post("/post",isAuthenticated,postJob);
router.get("/getmyjobs",isAuthenticated,getMyJobs);
router.put("/update/:id",isAuthenticated,updateJob);
router.delete("/delete/:id",isAuthenticated,deleteJob);
router.get("/:id",isAuthenticated,getSingleJob);

export default router;