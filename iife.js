// Immediately Invoke function expressions (IIFE)
// global scope pollution bhi hota hai vo na ho isiliye likhte hai

(function chai(){
    //this is a named iffie
    console.log("db connected");
})(); //semicolon should be there other wise it will throw error while running another iife

// ()()
//first () is definition and 2nd () is exectution


(
    //this is a unnamed iffie with parameters that we are passing
    (name) => {
        console.log(`DB connected 2 ${name}`);
    }
)('Somveer')