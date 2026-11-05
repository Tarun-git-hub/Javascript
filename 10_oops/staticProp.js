class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
   static createId(){
        return '12ad'
    }
}
const one = new User('tarun')
// one.logMe()
// console.log(one.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const teacher = new Teacher('hitesh','ex@gmail.com')
teacher.logMe()
console.log(teacher.createId())