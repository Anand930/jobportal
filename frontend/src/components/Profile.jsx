import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const Profile = () => {
  const skillsArr = ["HTML", "CSS", "Javascript", "ReactJS"]
  const haveResume = true
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className="flex justify-between">
          <div className='flex items-center gap-4'>
            <Avatar className={"h-24 w-24"}>
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&ss" alt="profile Image">
              </AvatarImage>
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Add your bio here</p>
            </div>
          </div>
          <Button className="text-right" variant={"outline"}>
            <Pen />
          </Button>
        </div>
        <div className='my-5'>
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>Anand@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>834623847</span>
          </div>
          <div className='my-5'>
            <h1>Skills</h1>
            <div className="flex items-center gap-1">

              {skillsArr.length !== 0 ? skillsArr.map((Item, index) => (
                <Badge key={index}>
                  {Item}
                </Badge>
              )) : "not Applicable"}
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className={"text-md font-bold"}>Resume</Label>
              {
                haveResume ? <a target='blank' href="https://www.google.com" className='text-blue-500 w-full hover:underline cursor-pointer'>Google</a> : (<span>N/A</span>)
              }
            </div>
          </div>
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
          <h1 className='font-bold text-lg my-5'>Applied Job</h1>
          {/* Application Table */}
          <AppliedJobTable />
        </div>


      </div>
    </div>
  )
}

export default Profile