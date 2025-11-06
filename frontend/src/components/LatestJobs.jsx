import React from 'react'
import LatestJobCart from './LatestJobCart'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job)
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold '> <span className='text-[#6a38c2]'>Latest & Top </span>Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>

                {
                    allJobs.slice(0,6).map((item, index) => (
                        <LatestJobCart job={item}/>
                    ))
                }
            </div>


        </div>
    )
}

export default LatestJobs