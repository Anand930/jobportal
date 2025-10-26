import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './utils/db.js'

dotenv.config({}) 

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))


app.listen(process.env.PORT||8000, ()=>{
    connectDb()
    console.log(`Server running at ${process.env.PORT || 8000}`);
    
})