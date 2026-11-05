class User{
    constructor(gmail,password){
        this.gmail=gmail
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}

const tarun = new User('t@mail.com','abc')
console.log(tarun.password);
