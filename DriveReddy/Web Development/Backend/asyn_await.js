function userData(id){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve({userRoll:"789"})
       },2000)
    })
}
function userSubjects(subname){
    return new Promise((resolve,rejcet)=>{
        setTimeout(()=>{
            resolve(subname)
        },2000)
    })
}
const myfun= async() => {
    console.log("123")
    const result = await userData("123")
    console.log(result)
    console.log("456")
    const result1=await userSubjects("maths")
    console.log(result1)
}
myfun();