// map 

const myNumber = [0,1,2,3,4,4,5,6,7,7,8,]

// const newNum = myNumber.map((num)=>{
//     return num + 10
// })

// chaining

const newNum = myNumber
                   .map((num)=> num*10)
                   .map((num)=> num+1)
                   .filter((num)=> num>60 )

console.log(newNum);
