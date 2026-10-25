function createUser(username){
this.username = username
}

function setUser(username,email,password){
    createUser.call(this,username)
    this.email=email
    this.password=password
}

const one = new setUser('tarun','email@gmail.com',123)
console.log(one);
