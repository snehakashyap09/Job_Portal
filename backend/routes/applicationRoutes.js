import express from "express";

const router = express.Router();
import {postApplication,employerGetAllApplication,
    jobseekerGetAllApplications,jobseekerDeleteApplication
} from "../controllers/applicationController.js"

import { isAuthenticated } from "../middlewares/auth.js";

router.post("/post",isAuthenticated,postApplication);
router.get("/employer/getall",isAuthenticated,employerGetAllApplication);
router.get("/jobseeker/getall",isAuthenticated,jobseekerGetAllApplications);
router.delete("/delete/:id",isAuthenticated,jobseekerDeleteApplication)


export default router;