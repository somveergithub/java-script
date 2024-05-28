/*
    primitive data types
    call by value
    7types: String, Number, Boolean, null, undefined, Symbol, BigInt
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temp = null

let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 789789789789789n

// console.log(bigNumber);

// console.log(id);
// console.log(anotherId);

// console.log(id === anotherId);

/*
    Reference (non primitive)
    Array, Objects, Functions
 */

const hearos = ["Shaktiman", "naagaraj", "doga"]
let myObj = {
    name: "somveer",
    age: 55
}

const myfun = function(){
    console.log('Hi');
}

// console.log(typeof anotherId);



// ---------------------------
/*
Stack(Primitive) - copy milta hai
Heap (non-primitive) - original value milti hai
 */

let myName = "dotcom"

let anotheName = myName
anotheName = "new name"

console.log(myName);
console.log(anotheName);

let user1 = {
    email: "google.com",
    upi: "user@ybl"
}

let user2 = user1

user1.email = "facebook.com"

console.log(user1);
console.log(user2);