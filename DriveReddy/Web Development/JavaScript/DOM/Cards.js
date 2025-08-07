var mycards=[
{
    "Image" : "",
    "Price": 1200,
    "Brand": "puma"
},
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
// {
//     "Image" : "",
//     "Price": 1200,
//     "Brand": "puma"
// },
{
    "Image" : "",
    "Price": 1200,
    "Brand": "puma"
}]
var cards=mycards.map((ele )=>{
    return` <div class="card">
            <div class="image">
                <img src="./flower.jpeg" alt="">
            </div>
            <div class="info">
                <div class="price">Price:${ele.Price}</div>
                <div class="brand">Brand:${ele.Brand}</div>
            </div>

        </div>`
});
 var parent=document.getElementsByClassName("main")[0]
 parent.innerHTML()=cards.join("");
