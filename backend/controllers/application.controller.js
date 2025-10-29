import { Application } from "../models/applcation.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "job Id is required",
        success: false,
      });
    }

    // check the user if alreday applied
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    // check if the job exist
    const job = await Job.findById({ _id:jobId });
    if (!job) {
      return res.status(404).json({
        message: "Job not available",
        success: false,
      });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "job applied successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJob = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!applications) {
      return res.status(404).json({
        messsage: "no application found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "get all applications",
      applications,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getApplicant = async (req, res) => {
  try {
    const jobId = req.params.id;
    const getJob = await Job.findById(jobId).populate({
      path: "applications",
      options: { sorted: { createdAt: -1 } },
      populate: {
        path: "applicant",
        sorted: {
          createdAt: -1,
        },
      },
    });
    if(!getJob){
        return res.status(404).json({
            message:"job not found",
            status:false
        })
    }
    return res.status(200).json({
        message:"got jobs",
        getJob,
        success:true
    })
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req,res) =>{
    try {
        const {status} = req.body
        const applicationId = req.params.id
        if(!status){
            return res.status(404).json({
                message:"status is empty",
                success:false
            })
        }

        const getApplication = await Application.findOne({_id:applicationId})
        if(!getApplication){
            return res.status(404).json({
                message:"Application not found",
                success:false
            })
        }
        getApplication.status = status.toLowerCase()
        await getApplication.save()
        return res.status(200).json({
            message:"status updated successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
