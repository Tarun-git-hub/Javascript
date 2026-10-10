// if

// let marks = 100
// if(marks>80){
//     console.log("Passed");
    
// }


// if else

//     let temperature = 41
// if(temperature>50){
//     console.log("temp. is greater than 50");   
// } else{
//     console.log("temp. is less than 50");
    
// }

// nested if else

// const balance = 1000
// if(balance<500){
//     console.log("less than 500");  
// } 
// else if(balance<750){
// console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const gmailLogin = true
const googleLogin = false
if(userLoggedIn && debitCard){
    console.log("do shopping");
    
}

if(googleLogin || gmailLogin){
    console.log("logged in");
    
}