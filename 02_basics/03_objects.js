// singleton
// Object.create()

const sym = Symbol("key1")

const jsUser = {
    name:"tarun",
    "full name":"tarun chaudhary",
    [sym]:"mykey1",
    age:19,
    email:"tarun@ju",
    istLoggedIn:false,
    lastLogeddIn:["monday","friday"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[sym]);

//jsUser.email = "tarun@123"
//jsUser[age] = 20   // give error
// Object.freeze(jsUser)
// jsUser["full name"] = "tarun kumar"
// console.log(jsUser);

jsUser.greeting1 = function(){
    console.log("hello js user");
    
}
// console.log(jsUser.greeting1);
// console.log(jsUser.greeting1());

jsUser.greeting2 = function(){
    console.log(`hello ${this.name} user`);
    
}
console.log(jsUser.greeting2());



