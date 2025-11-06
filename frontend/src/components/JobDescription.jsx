import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import axios from 'axios'
import { APPLICATION_API_VARIABLE, JOB_API_VARIABLE } from './utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setAllJobs, setSingleJob } from '@/redux/jobSlice'
import { toast } from 'sonner'

const JobDescription = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const jobId = params.id
    const { user } = useSelector(store => store.auth)
    const { singleJob } = useSelector(store => store.job)
    // const isApplied = false
    const { title, position, requirements, salary, experienceLevel, description, jobType, createdAt } = singleJob || {}
    const initaillyApplied = singleJob?.applications?.some(application => application.applicant?._id === user?._id) || false;

    const [isApplied, setIsApplied] = useState(initaillyApplied)
    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_VARIABLE}/apply/${jobId}`, { withCredentials: true })
            console.log("appliedjob", res.data);

            if (res.data.success) {
                setIsApplied(true)
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] }
                dispatch(setSingleJob(updatedSingleJob))
                toast.success(res.data.message)
                // dispatch()
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)

        }
    }

    console.log(singleJob);

    useEffect(() => {
        const fetchSingleJob = async () => {

            try {
                const res = await axios.get(`${JOB_API_VARIABLE}/get/${jobId}`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))
                    setIsApplied(res.data.job.applications.some((application) => application?.applicant === user?._id))
                    console.log("isAppliedAtFetchSinglejob", isApplied);

                }
                console.log("singleJob", res.data);
                console.log(user);
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message)
            }
        }
        fetchSingleJob()
    }, [jobId, dispatch, user?._id])
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>{position} Positions</Badge>
                        <Badge className={"text-[#f83002] font-bold"} variant={"ghost"}>{jobType}</Badge>
                        <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>{salary} LPA</Badge>
                    </div>
                </div>
                <Button onClick={isApplied ? null : applyJobHandler} disabled={isApplied} className={`rounded-lg ${isApplied ? "bg-gray-600 cursor-not-allowed" : "bg-[#7209b7] hover:[#5f32ad]"}`}>{isApplied ? 'Already Applied' : "Apply Now"}</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>{description}</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{experienceLevel} years</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{salary}LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applications: <span className='pl-4 font-normal text-gray-800'>{position} positions</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{createdAt?.split('T')[0]}</span></h1>
            </div>
        </div>
    )
}

export default JobDescription