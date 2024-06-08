class User{
    constructor(username, email){
        this.email = email
        this.username = username
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const somveer = new User("Somveer", "som@gmail.com")
console.log(somveer.email);