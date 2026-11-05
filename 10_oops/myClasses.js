class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
    encryptPassword(){
        return `${this.password}`
    }
}
const one = new User('tarun','example@gmail.com','1234')
console.log(one);
console.log(one.changeUserName());
console.log(one.encryptPassword());

