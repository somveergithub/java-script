// ES6 k baad use kr rhe hai

class User {
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    upperCase(){
        return this.username.toUpperCase()
    }
}

const chai = new User("Chai", "Chai@chai", "123")
console.log(chai.encryptPassword());
console.log(chai.upperCase());

// behind the scenes of the above code if classes would have not been present

function user (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.upperCase = function(){
    return this.username.toUpperCase()
}

const tea = new user("Tea", "tea@tea.com", "789")
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.upperCase());