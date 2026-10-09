const user = {
    username:"tarun",
    price:199,

    welcomeMessage: function(){
        console.log(`hey ${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


function chai(){
    username:"tarun"
    console.log(this.username);         // 'this' keyword is not work in function 
    
}
// chai()

const user1 = function(){
    username:"tarun"
    console.log(this.username);
    
}
// user1()

const user2 = ()=> {
    username:"tarun"
    console.log(this);
    
}
// user2()


// arrow function
// const addTwo = (num1,num2)=>{       // explicitly return
//     return num1+num2
// }

// const addTwo = (num1,num2)=> num1+num2      // implicitly return 

// const addTwo = (num1,num2)=> (num1+num2)

const addTwo = (num1,num2)=> ({username:"tarun"})


console.log(addTwo(6,8))