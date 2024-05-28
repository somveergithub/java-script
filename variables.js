const accountId = 13
let accountEmail = "tcs@tcs.com"
var password = "123456"
accountCity = "Noida"

let state // undefied value if we don't define anything

// accountId = 2 // not allowed to change

accountEmail = "hc@tcs.com"
password = "78945"
accountCity = "Jp"
console.log(accountId);

/*
don't use var as it doesn't take care of block scope.
Use let instead of var

*/

console.table([accountEmail, accountId, password, accountCity, state])

