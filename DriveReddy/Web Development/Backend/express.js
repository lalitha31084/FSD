import express from 'express'
const app = express()

app.get('/', (req,res)=>{
    res.send("this is from express with root path")
})

app.post('/add-user',(req,res)=>{
    let data=req.body()
    //logic to add data into your database
    res.send("data added")
})

app.listen(7007,()=>{
    console.log("express server is running")
})


