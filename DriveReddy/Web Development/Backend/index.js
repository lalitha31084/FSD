import express from 'express'

const app = express()

app.use(express.json())
// Methods-->get,put,post,delete
app.get('/get-user', (req, res) => {
    
    res.send("api success")
})
app.put('/edit-user',(req,res)=>{
    let data=req.body()
    res.end("data edited")
})
app.post('/add-user', (req, res) => {
    let data = req.body;
    console.log(data)
    res.send("data added")
})
app.delete('/delete-user',(req,res)=>{
    console.log("deleted user")
})
app.listen(7005, () => {
    console.log("express server is running")
})