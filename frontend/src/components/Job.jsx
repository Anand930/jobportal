import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate()
  // let JobId="1"
  const daysAgoFunction = (mongoDbTime) =>{
    const createdAt = new Date(mongoDbTime)
    const currentTime = new Date()
    const timeDifference = currentTime-createdAt
    return Math.floor(timeDifference/(1000*24*60*60))
  }

  console.log(job);
  
  const {company, jobType, location, salary, title, requirements, experienceLevel, description,position, _id} = job
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className=' flex items-center justify-between'>

        <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt===0?"Today":daysAgoFunction(job?.createdAt))} days ago</p>
        <Button variant={'outline'} className={'rounded-full cursor-pointer'} size={'icon'}><Bookmark /></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>

        <Button>
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s" />
          </Avatar>
        </Button>
        <div>
          {/* <h1 className='font-md text-lg'>{company.name}</h1> */}
          <p className='text-sm text-gray-500'>{location}</p>
        </div>
      </div>
      <div className=''>
        <h1 className='font-bold text-lg my-2'>{title}</h1>
        <p className='text-sm text-gary-600'>{description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>{position} Positions</Badge>
        <Badge className={"text-[#f83002] font-bold"} variant={"ghost"}>{jobType}</Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>{salary} LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button className={"cursor-pointer"} onClick={()=>navigate(`/description/${_id}`)} variant={"outline"}>Detals</Button>
        <Button className={"bg-[#7209b7] cursor-pointer "}>Save For Later</Button>
      </div>
    </div>
  )
}

export default Job