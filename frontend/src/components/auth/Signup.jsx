import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const Signup = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <form action="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                <div className='my-2'>
                    <Label>Full Name</Label>
                    <Input 
                    type={"text"}
                    placeholder="Anand"
                    />
                </div>
                <div className='my-2'>
                    <Label>Email</Label>
                    <Input 
                    type={"email"}
                    placeholder="Anand@gmail.com"
                    />
                </div>
                <div className='my-2'>
                    <Label>Phone Number</Label>
                    <Input 
                    type={"text"}
                    placeholder="754935783894"
                    />
                </div>
                <div className='my-2'>
                    <Label>Password</Label>
                    <Input 
                    type={"password"}
                    placeholder="754935783894"
                    />
                </div>
                <div className='my-2'>
                    <Label>Password</Label>
                    <Input 
                    type={"password"}
                    placeholder="754935783894"
                    />
                </div>

            </form>
        </div>
    </div>
  )
}

export default Signup