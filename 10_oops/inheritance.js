class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`name is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.password=password
        this.email=email
    }
    addCourse(){
        console.log(`new course add by ${this.username}`);
        
    }
}

const teacher = new Teacher('tarun','hey@mail.com','1234')
teacher.addCourse()