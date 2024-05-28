const heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash","batman"]

// heros.push(dc) // directly adds the entire array as a single object

// console.log(heros);
// console.log(heros[3][2]);


const allHeros = heros.concat(dc)
console.log(allHeros);

//... is spread operator
const aspread = [...heros, ...dc]
console.log(aspread);

const anotherArray = [1,2,3,[4,5,6],7,[4,[5,6]]]

const otherarray = anotherArray.flat(Infinity)
console.log(otherarray);

console.log(Array.isArray("Somveer"));
console.log(Array.from("Somveer"));
console.log(Array.from({name: "Somveer"})); //intersting

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));