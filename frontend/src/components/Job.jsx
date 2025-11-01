import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className=' flex items-center justify-between'>

        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant={'outline'} className={'rounded-full'} size={'icon'}><Bookmark /></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>

        <Button>
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-md text-lg'>CompanyName</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div className=''>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gary-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur ea quibusdam magnam optio porro soluta cum reprehenderit voluptatem quae!</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>12 Positions</Badge>
        <Badge className={"text-[#f83002] font-bold"} variant={"ghost"}>Part-Time</Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>24 LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant={"outline"}>Detals</Button>
        <Button className={"bg-[#7209b7]"}>Save For Later</Button>
      </div>
    </div>
  )
}

export default Job