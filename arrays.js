const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray);

const myHeros = ['Sharktiman', 'Nagraj']

const a2 = new Array(1,2,3,4)

console.log(a2.length);
console.log(a2[1]);

//array methods

a2.push(6)
a2.push(7)
console.log(a2);

a2.pop()
console.log(a2);

a2.unshift(9)
console.log(a2);

a2.shift()
console.log(a2);


console.log(a2.includes(6));
console.log(a2.indexOf(5));
console.log(a2.indexOf(6));

const newar = a2.join()


console.log(a2);
console.log(newar);

//slice splice

console.log("A ", a2);

const a3 = a2.slice(1,3)

console.log(a3);
console.log("B ", a3);



const a4 = a2.splice(1,3) // updates original array as well

console.log(a2);
console.log(a4);