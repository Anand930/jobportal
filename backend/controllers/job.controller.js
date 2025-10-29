import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const createdJob = await Job.create({
      title,
      description,
      requirements: requirements.split(", "),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      createdBy: userId,
    });

    if (!createdJob) {
      return res.status(400).json({
        message: "job is not created",
        success: false,
      });
    }
    return res.status(201).json({
      message: "New job created successfully",
      createdJob,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res
        .status(404)
        .json({ message: "jobs not found", success: false });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// student
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({ message: "got job", job, success: true });
  } catch (error) {
    console.log(error);
  }
};

// all the job posted by recruiter
export const getRecruiterJob = async (req, res) => {
  try {
    const adminId = req.id;
    const jobsTofind = await Job.find({ createdBy: adminId });
    if (!jobsTofind) {
      return res.status(404).json({
        message: "No job found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "get all jobs",
      jobsTofind,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
