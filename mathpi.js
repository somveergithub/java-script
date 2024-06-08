const { privateDecrypt } = require("crypto");

const m = {username: "username"}

const desc = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(desc);


const chai = {
    name: 'ginger',
    price: 150,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// here we have made the name not writable and not enumerable, so if user tried to iterate over it this property will be skipped
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
