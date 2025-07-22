import express from "express"
import client from 'prom-client'
import { slowfile } from "./utils/slowfile.js"
const app =express()

app.get("/",(req,res)=>{
    res.json({
        message:"Running",
        statuscode:200
    })


})

const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({register:client.register})

app.get("/metrics",async (req,res)=>{

        res.setHeader('Content-Type',client.register.contentType)
        const metrics = await client.register.metrics();
        res.send(metrics)

})

app.get("/slow",async (req,res)=>{
    
try{
    const response = await slowfile();
    return res.status(response).json({
        message:`Work completed in ${response} time`,
        status:"Success"  
    })
    
}
catch(err)
{
    return res.json({message: err.message,
        
}).status(500)
}

})

app.listen(8000)