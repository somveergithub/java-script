// closure gives you access to an outer funcitons scope from an inner function. In Js closures are created everytime a function is created at function creation time.

// Lexical Scoping

function outer(){
    let name = "somveer"
    function myhandler(){
        console.log('inner: ', name);
    }
    myhandler() // function execution
    return myhandler // returning function reference
}

let it = outer() // reference will be saved in the it variable
console.log(it);
it() // calling the myhandler() function

// console.log('far outer : ', name); //it will throw an error

/*
Here the name variable is only accessible in the scope of the outer funciton and myhandler funciton

but if we can to access it ourside the outer scope then we can return its reference and save it and then invoke it, this is called closure 
 */