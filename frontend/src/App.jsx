import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/Companies'
import CreateCompany from './components/CreateCompany'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/profile",
    element: <Profile />
  },

  // Routing For Admin

  {path:"/admin/companies",
    element:<Companies/>
  },
  {path:"/admin/companies/create",
    element:<CreateCompany/>
  },

])

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
