const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async function is created");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise is consumed");
    
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
console.log('async 2 resolve');

})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({user:'tarun',age:20})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error = false
     if(!error){
        resolve({username:'drashti',password:'123'})  
     } else{
        reject('an error has occured')
     }
    },1000)
})

promiseFour
.then(function(user){
console.log(user);
return user.username
})
.then(function(username){
    console.log(username);   
})
.catch(function(error){
    console.log(error);  
}).finally(()=>{
    console.log('the promise is either resolved or rejected');
    
})

fetch('https://api.github.com/users/Tarun-git-hub')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})