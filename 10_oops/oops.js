const user = {
    username:'tarun',
    id:1716,
    isLoggedIn:true,
    userDetails:function(){
       // console.log('these are details');
       console.log(this);
       
        
    }
}
//console.log(user);
// console.log(user.userDetails());
// console.log(this);


function person(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    return this
}
const one = new person('tarun',12,true)
const two = new person('drashti',11,false)
console.log(one);
