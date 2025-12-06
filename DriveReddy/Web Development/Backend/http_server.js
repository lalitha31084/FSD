import http from 'http'
const Server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end("This si from backend")

})
Server.listen(7007,()=>{
    console.log(`thsi si the number $ {7007}`)
})