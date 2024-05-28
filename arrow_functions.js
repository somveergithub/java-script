const user = {
    name : "somveer",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.name} , welcome to website`)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()

// console.log(this); //current context is empty, this is in node environment, if you run it in browser it will show the window object

// function chai(){
//     let username = "somveer"
//     console.log(this.username);
// }

// chai()

//arrow functions
// () => {}
const c2 = () => {
    let username = "somveer"
    console.log(this);
}

c2()

const add3 = (num1, num2) => {
    return num1 + num2
}

console.log(add3(3,4));

//implicit return
const add4 = (n1, n2) => n1 + n2
console.log(add4(4,5));

const add5 = (n1, n2) => (n1 + n2)
console.log(add4(4,5));

const add6 = (n1, n2) => ({name: "som"}) // to return object we need to wrap in parnthesis otherwise it will return wrong output
console.log(add6(4,5));

