import express, {Request, Response} from 'express'
import { PrismaClient } from '.prisma/client'
const Port=process.env.PORT||3000

const server=express()

const prisma=new PrismaClient()

//Get All Jokes
server.get("/",async(req:Request, res:Response)=>{
    const jokes=await prisma.joke.findMany()
    res.json({jokes})
})


//Create All Jokes
server.post("/",async(req:Request, res:Response)=>{
    const joke=await prisma.joke.create({
        data:{
            text:"['hip','hip']",
            userId:"ckvglxu720013rifau5fgrz6w"
        }
    })
   res.json({joke})
})

server.listen(Port)