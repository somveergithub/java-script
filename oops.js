// Java script and classes

const { log } = require("console");

// OOP : object oriented programming

// Object: collection of properties and methods

//Pillars of OOPs
/*
-> Abstraction : to hide the backend workflow
-> Encapsulation : wrapper for methods and variables
-> Inheritance
-> Polymorphism : one method can do multiple things.
 */ 

// Why OOPs?
// parts of OOPs : object literal

// Constructor funciton
// Prototypes
// Classes
// Instances (new, this)

//object literal
const user = {
    username: "somveer",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got userdetails from database");
        console.log(`${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this);

//constructor

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// If we do below one it will keep on updating the same object/instance
// const u1 = User("somveer",45,false)
// console.log(u1);

// const u2 = User("logger", 47, true)
// console.log(u2);
// console.log(u1);


// empty object is created using the new word and it calls a constructor function and sets the value for that.
const u1 = new User("somveer",45,false)
console.log(u1);

const u2 = new User("logger", 47, true)
console.log(u2);
console.log(u1.constructor); // to view the constructor