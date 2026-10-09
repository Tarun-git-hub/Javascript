let a = 10
const b = 20
// var c = 30
           // let and const are block level scope variable, var is global variable 
if(true){
    let a =100
    const b =200
    // var c = 300
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "tarun"

    function two(){
    const website = "youtube"
    console.log(username);
    
    }
   // console.log(website);
    two()
}
one()