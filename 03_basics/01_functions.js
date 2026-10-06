// function addNumbers(num1,num2){
//     console.log(num1+num2);
    
// }

function addNumbers(num1,num2){
    return num1+num2
    
}

// const result = addNumbers(4,7)
// console.log(result);

function userLoggedIn(userName="drash"){
    if(userName===undefined){
        console.log("enter user name");
        return;
        
    }
return `${userName} has logged in`

}
// console.log(userLoggedIn());


function calculateCartPrice(...num){          // Rest operator
    return num
}
// console.log(calculateCartPrice(100,250,400));

const user = {
    username:"tarun",
    price:199

}
function handleObject(users){    // pass parameter of any name, but in function call it should be same of object 
    console.log(`username is ${users.username} and price is ${users.price}`);
    
}
// handleObject(user);

handleObject({
    username:"hitesh",
    price:399
})

const newArr = [10,20,30,40]

function handleArr(getArr){
return getArr[1]
}

// console.log(handleArr(newArr));

console.log(handleArr([10,50,89,53,57]));

