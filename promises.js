// fetch('https://something.com').then().catch().finally()

// import {fetch} from "node-fetch";
// const fetch = require("node-fetch");

const firstPromise = new Promise(function(resolve,reject){
    //Do async task
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async Task is completed');
        resolve()
    }, 1000)
})

console.log(firstPromise);

firstPromise.then(function(){
    console.log("promise consumed");
})

const secondPromise = new Promise(function (resolve, reject){
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('2nd promise consumed');
})

// sending data to then() function
const thirdpromise = new Promise( function(resolve, reject){
    setTimeout(function(){
        resolve({username: "somveer", email: "somveer@gmail.com"})
    }, 1000)
})

thirdpromise.then(function(user){
    console.log(user);
})


const fourthpromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "somveer", password: "1234"})
        } else {
            reject('Error: something went wrong')
        }
    }, 1000)
})

fourthpromise.then((user) =>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})


const fifthpromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "1234"})
        } else {
            reject('Error: js went wrong')
        }
    }, 1000)
})
// handling promise without using then and catch
async function consumePromiseFive(){
    try {
        const response = await fifthpromise
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()


//--------------------------

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))