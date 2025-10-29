import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAllJobs, getJobById, getRecruiterJob, postJob } from "../controllers/job.controller.js";

const router = express.Router()

router.route('/post').post(isAuthenticated, postJob)
router.route('/get').get(isAuthenticated, getAllJobs)
router.route('/getrecruiterjobs').get(isAuthenticated, getRecruiterJob)
router.route('/get/:id').get(isAuthenticated, getJobById)

export default router