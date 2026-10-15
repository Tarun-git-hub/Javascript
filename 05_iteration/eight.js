const myNum = [1,2,3]

// const total = myNum.reduce(function (acc,currVal) {
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
    
//     return acc + currVal
// },0)

// const total = myNum.reduce((acc,currVal)=> acc+currVal,0)

// console.log(total);

const shoppingCart = [
    {
        item:"js course",
        price:2999
    },
    {
        item:"py course",
        price:1999
    },
    {
        item:"data science course",
        price:12999
    },
    {
        item:"web dev course",
        price:8999
    },
    {
        item:"java course",
        price:999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(totalPrice);
