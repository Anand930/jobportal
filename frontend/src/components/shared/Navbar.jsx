import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import axios from 'axios'
import { USER_API_VARIABLE } from '../utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const logOutHandler = async () => {
        const res = await axios.get(`${USER_API_VARIABLE}/logout`, { withCredentials: true })
        if (res.data.success) {
            dispatch(setUser(null))
            Navigate('/')
            toast.success(res.data.message)
        }
    }
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>

                    <Link to={"/"}>
                        <h1 className='text-2xl font-bold'>Job <span className='text-[#f83002]'>Portal</span></h1>
                    </Link>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {user && user.role === "recruiter" ? (
                            <>
                                <li><Link to={"/admin/companies"}>Companies</Link></li>
                                <li><Link to={"/admin/jobs"}>Jobs</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/jobs"}>Jobs</Link></li>
                                <li><Link to={"/browse"}>Browser</Link></li>
                            </>
                        )}

                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to={"/login"}><Button variant={"outline"}>Login</Button></Link>
                                <Link to={"/signup"}><Button className={"bg-[#6a38c2] hover:bg-[#310975]"}>SignIn</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className={"cursor-pointer"}>
                                        <AvatarImage src={user.profile.profilePhoto} alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className={"w-80"}>
                                    <div className='space-y-2'>
                                        <Avatar className={"cursor-pointer"}>
                                            <AvatarImage src={user.profile.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>Anand Sharma</h4>
                                            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-gray-600'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant={"link"}><Link to={"/profile"}>View Profile</Link></Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button onClick={logOutHandler} variant={"link"}>Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar