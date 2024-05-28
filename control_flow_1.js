// code should run as per the flow, all code should not run
/*
if contition is true then the code written in its scope will run
if (condition){
    #code
}
*/

const isUserLoggedIn = true
// <, >, <=, >= , == (checks value), !=, === (checks value along with type of the value), !==
if (isUserLoggedIn){
    console.log("logged in");
}

const temp = 41

if (temp < 50){
    console.log("Temperate is less than 50");
} else {
    console.log("Temperature is greater than 50");
}



const score = 200
if (score > 100){
    const power = "fly"
    console.log(`user power is ${power}`);
}
// console.log(`user power is ${power}`); //will fail if uncommented as power is defined in function scope only and not accessible outside


//short hand notation (implict scope)
const balance = 1000

if (balance > 500) console.log("implicit scope executed");


if (balance < 500) {
    console.log("less then");
} else if (balance < 750) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const LoggedInfromGoogle = false
const LoggedinfromEmail = true

// logical operators
// and && condition
if (userLoggedIn && debitCard) {
    console.log("allowed to buy courses");
}

// or || condition
if (LoggedInfromGoogle || LoggedinfromEmail) {
    console.log("user logged in");
}


//switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 2

switch (month) {
    case 1:
        console.log("Month is January");
        break;
    case 2:
        console.log("Month is Feb");
        break; // if break is not present then it will execute all the further code except default. It will stop the flow as soon as it finds a break.
    case 3:
        console.log("Month is March");
        break;
    case 4:
        console.log("Month is April");
        break;

    default:
        console.log("Month is wrong");
        break;
}

//-----------------------------------------------
//truthy values

const userEmail = "h@m.com"
// if string is empty then false otherwise it is true.
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/*
falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
truthy values : all other values are considered as truthy values and will be considered as true

"0", 'false', " ", [], {}, function(){} : all theser are considered as truthy values

so, when we check if array is empty then we need to be cautious. We can use length property of array to do the checking
 */

const arr = []
if (arr.length === 0){
    console.log("Array is empty");
}

const empObj = {}
if (Object.keys(empObj).length === 0){
    console.log("object is empty");
}
/*
Keep in mind
false == 0 -> true
false == '' -> true
0 == '' -> true
 */


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

val1 = null ?? 10

val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator
// condition ? true : false

const val2 = 150

val2 > 20 ? console.log("less than 20") : console.log("not less than 20")


