const course = {
    name: "js in hindi",
    price : "999",
    courseinstructor: "somveer"
}

// course.courseinstructor

//below is destructuring
// const {courseinstructor} = course // in this we need to use the courseinstructor as the variable name

const {courseinstructor: instructor} = course // in this we can save it in a new variable named instructor, no effect on value

console.log(instructor);

// {
//     "name": "somveer",
//     "courseName": "js in hindi",
//     "price": "free"
// }