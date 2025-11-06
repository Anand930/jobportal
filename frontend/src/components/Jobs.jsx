import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'

const Jobs = () => {
    const jobArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const {allJobs} = useSelector(store=>store.job)
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <div className="flex gap-5">
                    <div className="w-[20%]">

                        <FilterCard />
                    </div>
                    {allJobs.length <= 0 ? <span>Job not found</span> : (
                        <div className='flex-1 h-[88vh]'>
                            <div className='grid grid-cols-3 gap-4'>

                                {allJobs.map((item, index) => (
                                    <div>

                                        <Job job={item}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Jobs