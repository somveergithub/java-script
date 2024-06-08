class User {
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor (username, email, password){
        super(username) // this will automatically call the constructor of user class
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const t1 = new Teacher("Somveer", "som@google.com", "789465")
console.log(t1.addCourses());
console.log(t1.logMe());

const t2 = new User("masala")
// console.log(t2.addCourses());
console.log(t2.logMe());


console.log(t2 instanceof Teacher);