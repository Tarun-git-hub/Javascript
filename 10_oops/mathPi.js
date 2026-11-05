// console.log(Math.PI);

const description = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(description);

const myObj = {
    username:'tarun',
    password:'123',
    mail:"hey@gmail.com"
}

// const myDesc = Object.getOwnPropertyDescriptor(myObj,"mail")
// console.log(myDesc);

Object.defineProperty(myObj,'username',{
    writable:false,
    enumerable:false
})
myObj.username='hirtesh'
console.log(myObj.username);

// const myDesc = Object.getOwnPropertyDescriptor(myObj,"username")
// console.log(myDesc);