function getUserData (id){
    return new Promise((resolve,reject) => {
    console.log("fun1 is called");
    resolve({userSubject: "maths"})
    })
}

function getUserSubject(userSubject){
    return new Promise((resolve, reject)=>{
        console.log("fun2 is called");
        resolve("getting user marks with subject",userSubject)
    })
}

getUserData ("23A91A6108").then((result)=>{
    return getUserSubject(result.userSubject)
}).then((result) => console.log(result))
.catch((error)=>console.log(error))



