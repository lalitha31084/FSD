function userData(id,userRollDetails){
    console.log("getting the user Data",id)
    userRollDetails({userRoll:'23A91A6108'})

}
function userRollDetails(userRoll){
    console.log("Getting the user Id",userRoll)
}
// userData("1",function(userRoll){
//     userRollDetails(userRoll);
// });

// using Arrow Function
userData("1",(userRoll)=>{
    userRollDetails(userRoll);
});







