// let myName = "somveer       "

// console.log(myName.trueLength);

let myheros = ["hulk", "thor"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// gave a prototype function to Object so it will be propogated to all the other Ojects create like array, dict, etc.
Object.prototype.somveer = function(){
    console.log("somveer is present in all objects");
}

heroPower.somveer()
myheros.somveer()

// trying to give a prototype to array and will check if object will also have that prototype or not

Array.prototype.newSomveer = function(){
    console.log('Hi New Somveer');
}

// heroPower.newSomveer() // it failed because the newSomveer prototype was not propogated to the Object class it remained within the Array class only
myheros.newSomveer() // prototype was successfully added to the array class


// Inheritance
const user = {
    name: "somveer",
    mail: "somveer@gmail.com"
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS",
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user // prototypal inheritance (outdated)

//modern syntax
Object.setPrototypeOf(TeachingSupport, teacher)

let sname = "new name     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

console.log(sname.trueLength());

"hello world ".trueLength() // prototype successfully added to String 