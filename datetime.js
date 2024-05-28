let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());


console.log(typeof myDate);

let mycreatedDate = new Date(2032, 0, 23)

console.log(mycreatedDate);

let newDate = new Date("2023-01-14")

console.log(newDate);

let nnewDate = new Date("12-12-1998")

console.log(nnewDate);


let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let nd = new Date()

console.log(nd.getMonth()+1);
console.log(nd.getDay());

console.log(nd.toLocaleDateString('default', {
    weekday: "long",
    timeZone: "IST"
}));