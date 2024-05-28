let age = "false"

console.log(typeof age);
console.log(typeof(age));

let value = Number(age)

console.log(typeof value);
console.log(value);

// "33" : converted to number
// "33adf" : NaN not a number
// true : 1 , false: 0
// undefined : NaN
// null : 0


let loggedin = "fdsjfhsdk"

let boolenLoggedIn = Boolean(loggedin)

console.log(boolenLoggedIn);

// 1 : true, 0 : false
// "" : false (string is empty)
// "sp" : true  (string exists)


let num = 78

let snum = String(num)

console.log(snum);
console.log(typeof snum);