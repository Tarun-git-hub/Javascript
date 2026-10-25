function multiplyBy5(num){
    return num*5
}
// console.log(multiplyBy5(5));
// multiplyBy5.power = 2
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


function createUser(username,score){
this.username = username
this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`${this.score}`);
    
}

const userOne = new createUser('tarun',18)
const userTwo = new createUser('drashti',45)

userOne.increment()
userOne.printMe()
userTwo.printMe()