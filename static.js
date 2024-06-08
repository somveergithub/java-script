class User {
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    // we declare the method as static as we don't want it to be accessible in child class or the object instances
    static createId(){
        return `123`
    }
}

const somveer = new User("Somveer")
// console.log(somveer.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@i.com")
iphone.logMe()
// console.log(iphone.createId());