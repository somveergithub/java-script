function setUserName(username){
    this.username = username
    console.log('called');
}

function createUser(username, email, password){
    // setUserName(username) //function runs but value is not stored in the object
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const me = new createUser("Somveer", "somveer@gmail.com", "123456")
console.log(me);

/**
Here we are calling another function in the function that we created. The child function is executing but not saving the value of username in the parent context.

To save/return the value to the parent context we use the call method and pass this to it so that after the function execution is completed the username can be saved in the object context
 */