import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Form, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_VARIABLE } from '../utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {
    // initial inpute state
    const [input, setInput] = useState({ fullname: "", email: "", phoneNumber: "", password: "", role: "", file: "" })

    const {loading} = useSelector(store=>store.auth)
    const dispatch = useDispatch()
    // navigate method
    const navigate = useNavigate()

    // input change handler
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    // file handler
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }

    // form submit handler
    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("fullname", input.fullname)
        formData.append('email', input.email)
        formData.append('phoneNumber', input.phoneNumber)
        formData.append('password', input.password)
        formData.append('role', input.role)
        if (input.file) {
            formData.append('file', input.file)
        }
        console.log("formData: ", formData);

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_VARIABLE}/register`, formData, {
                "Content-Type": "multipart/form-data",
                withCredentials: true
            })
            if (res.data.success) {
                navigate('/login')
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message)
            console.log(error);
        } finally{
            dispatch(setLoading(false))
        }

    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className="w-1/2 border  border-gray-200 rounded-md p-4 my-10">
                    <h1 className='font-bold text-xl mb-5'>Signup</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            name="fullname"
                            type={"text"}
                            placeholder="Anand"
                            value={input.fullname}
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type={"email"}
                            placeholder="Anand@gmail.com"
                            onChange={changeEventHandler}
                            value={input.email}
                            name="email"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type={"text"}
                            placeholder="754935783894"
                            onChange={changeEventHandler}
                            name="phoneNumber"
                            value={input.phoneNumber}
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type={"password"}
                            placeholder="754935783894"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className={"flex items-center gap-4 my-5"}>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" value="student" name="role" checked={input.role === "student"} onChange={changeEventHandler} className={"cursor-pointer"} />
                                <Label htmlFor="student"  >Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" value="recruiter" name="role" className={"cursor-pointer"} checked={input.role === "recruiter"} onChange={changeEventHandler} />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input accept="image/*" type={"file"} className={"cursor-pointer"}
                                onChange={changeFileHandler} />
                        </div>
                    </div>
                    {(loading === true) ? (
                        <div>
                            <Button className={"w-full my-4"}><Loader2 className='animate-spin ' />Please Wait</Button>
                        </div>
                    ) : <>
                        <Button type="submit" className="w-full my-4">SignUp</Button>
                    </>}
                    <span className='text-sm'>Already have an Account <Link to="/login" className="text-blue-600">Login</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Signup