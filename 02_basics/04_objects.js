// const user = new Object()   // singleton
const user = {}


    user.name= "tarun",
   user.age=20,
    user.city="jaipur",
    user.isLoggedIn=false
    // console.log(user);

    const regularUser = {
        email:"tarun@gmail.com",
        name:{
            fullname:{
                fisrtName:"tarun",
                lastName:"chaudhary"
            }
        }
    }
    // console.log(regularUser.name.fullname.fisrtName);
    
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 = {obj1,obj2,obj3}
//const obj5 = Object.assign(obj1,obj2,obj3)
// const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5);

const user1 = [
    {id:1,
        mail:"tmail.com"
    },
    {id:2,
        mail:"hmail.com"
    },
    {id:3,
        mail:"lmail.com"
    }
]
//console.log(user1[1].id);
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('city'));







