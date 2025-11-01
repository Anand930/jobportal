import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_VARIABLE } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    // initial input state
    const [input, setInput] = useState({ email: "", password: "", role: "" })
    // loading from teh redux store
    const {loading} = useSelector(store => store.auth)
    // navigate method
    const navigate = useNavigate()
    // dispatch method from redux
    const dispatch = useDispatch()

    // changeevent handler for the inputs
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    // form submit function
    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(setLoading(true))
        
        try {
            const res = await axios.post(`${USER_API_VARIABLE}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            if (res.data.success) {
                dispatch(setUser(res.data.user))
                navigate('/')
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error);
        } finally {
            dispatch(setLoading(false))
        }

    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form action={""} onSubmit={submitHandler} className="w-1/2 border  border-gray-200 rounded-md p-4 my-10">
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

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
                                <Input type="radio" value="student" name="role" checked={input.role === "student"} onChange={changeEventHandler} />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" value="recruiter" name="role" className={"cursor-pointer"} checked={input.role === "recruiter"} onChange={changeEventHandler} />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>

                    </div>
                    {(loading) ? (
                        <div>
                            <Button className={"w-full my-4"}><Loader2 className='animate-spin ' />Please Wait</Button>
                        </div>
                    ) : <>
                        <Button type="submit" className="w-full my-4">Login</Button>
                    </>}
                    <span className='text-sm'>Don't have an Account <Link to="/signup" className="text-blue-600">SignUp</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Login