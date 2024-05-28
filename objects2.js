const tinder = new Object() // this is singleton object
const tinder2 = {} // non-singleton object

//both are same no differnce in them
console.log(tinder);
console.log(tinder2);

tinder.user = "123abc"
tinder.name = "sam"
tinder.isLoggedIn = false

console.log(tinder);


const reguser = {
    email: 'som@gamil.com',
    fullName: {
        userfullname:{
            firstname: "hitesh",
            lastName: "singh"
        }
    }
}

console.log(reguser.fullName.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);

//if we pass empty {} then is saves the result in the new object other wise it would save it in the first passed object
const obj4 = Object.assign({},obj1, obj2)
console.log(obj4);

//... spread
const obj5 = {...obj1, ...obj2}
console.log(obj5);


const users = [
    {
        id: "som",
        email: "som@tcs.com"
    },{
        id: "som2",
        email: "som2@tcs.com"
    },{
        id: "som3",
        email: "som3@tcs.com"
    }
]

console.log(users[1].email);


console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLogged')); //to check if property exists
