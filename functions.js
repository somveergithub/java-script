function logger() {
    console.log("Hello");
}

/*
logger - > reference of function
logger() -> execution of function
*/

logger()

//function with parameters
function add2Numbers(n1, n2){
    console.log(n1 + n2);
}

//calling function with arguments
const res = add2Numbers(3,5)

console.log(res);

function add2Numbersandreturn(n1, n2){
    let res = n1 + n2
    return res
}

const r2 = add2Numbersandreturn(7,8)
console.log(r2);

//created function with default parameter
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Somveer"));
console.log(loginUserMessage());

//... here is rest operator
// first value would be saved in v1 and rest in n1
function calculate(v1, ...n1){
    return n1
}

console.log(calculate(200, 400, 800));

const user = {
    name: "som",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.prices}`);
}

handleObject(user)


const newArr = [200,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArr));
