let name = "somveer"
const b = 20
var c = 30 //doesn't work like block scope in {}

console.log(name);
console.log(b);
console.log(c);


if (true) {
    let d = 1
    var e = 2
    const f = 3
}

// console.log(d);
console.log(e); // e declared within funciton but still accessible
// console.log(f);



//nested scope

function one(){
    const name = "somveer"

    function two(){
        const website = "youtube"
        console.log(name);
    }
    // console.log(website);

    two()
}

one()


if (true){
    const username = "sssssss"
    if (username === "sssssss"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++ intersting +++++++++++++
//for this decleration of function we can access the funtion first then declare it
console.log(addone(5))

function addone(num){
    return num+1
}

// here we are saving the funtion in a variable so if we try to access is like the above one then it will fail
const add2 = function(num){
    return num + 2
}

console.log(add2(5))