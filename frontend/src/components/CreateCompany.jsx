import React from 'react'
import Navbar from './shared/Navbar'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const CreateCompany = () => {
    const navigate = useNavigate()
    const registerNewCompany = async()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company's Name</h1>
                    <p>What would you give the company name, you can change it later</p>
                </div>
                <Label>Company Name</Label>
                <Input className="my-2"
                    placeholder=" JobHunt, Microsoft etc."
                    type="text" />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant={"outline"} onClick={()=>navigate('/admin/companies')}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Continue</Button>

                </div>
            </div>
        </div>
    )
}

export default CreateCompany