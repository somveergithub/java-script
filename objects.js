// singleton

// object literals
const s1 = Symbol("Key1")
const s2 = Symbol("Key2")

const user = {
    name : "somveer",
    age : 45,
    email: "google@tcs.com",
    isLoggedIn : false,
    lastLogin: ["Monday", "Saturday"],
    "full name": "Somveer Singh",
    [s1]: "key1"
} //object
// Object.create

console.log(user);
console.log(user.email);
console.log(user["email"]);

// console.log(user.full name);
console.log(user["full name"]);
console.log(user[s1]);
console.log(typeof user[s1]);


user.email = "tcs.tcs.com"
// Object.freeze(user)
user.email = "microsoft.com"

console.log(user);


user.greetings = function(){
    console.log("Hello user");
}
user.greetings2 = function(){
    console.log(`Hello user ${this.name}`);
}

console.log(user.greetings());
console.log(user.greetings2());