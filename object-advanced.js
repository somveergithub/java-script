// function is both function and object
/**
 function -> object-> null
 string -> object -> null
 */
function multiplyby5(num){
    return num*5
}

multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);


function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const chai = new createuser("chai", 25)

createuser.prototype.whoami = function(){
    console.log(`I am ${this.username}`);
}
const tea = new createuser("tea", 250)

console.log(chai.whoami());
console.log(tea.whoami());

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is create: the new keyword initiates the creation of a new javascript object

A prototype is linked: the newly created object gets linked to the prototype property of the constructor function. This means that it has access to the properties and methods defined on the constructor's prototype

The constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, javascript assumes this, the newly created object, to be the intended return value.

The new objec is returened: after the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
 */

