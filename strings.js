const name = "somveer"
const repocount = 50

// console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gname = new String('Somveer')

console.log(gname[0]);
console.log(gname.__proto__);
console.log(gname.length);
console.log(gname.toUpperCase());


console.log(gname.charAt(2));

console.log(gname.indexOf('e'));

console.log(gname.lastIndexOf('e'));


console.log(gname.substring(0,4));

// Somveer
const anotherString = gname.slice(-4,4)
console.log(anotherString);

const newStr1 = "   somveer  "
console.log(newStr1);
console.log(newStr1.trim());



const repString = "somveersingh.com%20"

console.log(repString);
console.log(repString.replace('%20', '-'));

console.log(repString.includes('hello'));