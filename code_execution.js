// Java script execution context
/*
2 things are made as soon as we run our java script code

-> Global Execution context
-> Function Execution context
-> Eval execution context 

Two phases
-> memory creation phase //memory is allocated to variables
-> Execution phase 

*/

let val1 = 10
let val2 = 5

function addNumb(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNumb(val1, val2)
let result2 = addNumb(10, 2)

/*
Execution steps for above code
1. global execution contexnt -> this is made
2. memory phase : all variables is taken and put in memory
    val1 -> undefined
    val2 -> undefined
    addnumb -> function definition
    result1 -> undefined
    result2 -> undefined

    This is first cycle will always happen
3. Execution phase
    val1 <- 10
    val2 <- 5
    addNum -> separate execution context is made for the function (a new thread is given to it)
        -> new executional context(new variable environment + execution thread)

            --> Memory phase
                num1 -> undefined
                num2 -> undefined
                total -> undefined
            --> Execution context
                num1 <- 10
                num2 <- 5
                total <- 15
                now, total is returned to parent global execution context (here it is global execution context)
        -> Then the newly created executional context will be deleted
    result1 <- 15

    addNum -> separate execution context is made for the function (a new thread is given to it)
        -> new executional context(new variable environment + execution thread)

            --> Memory phase
                num1 -> undefined
                num2 -> undefined
                total -> undefined
            --> Execution context
                num1 <- 10
                num2 <- 2
                total <- 12
                now, total is returned to parent global execution context (here it is global execution context)
        -> Then the newly created executional context will be deleted
    result2 <- 12
 */

//Call Stack
/*
last in first out (LIFO)

 */