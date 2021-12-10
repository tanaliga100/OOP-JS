class User {
    constructor (email, firstName, lastName) {
        this.email = email,
        this.firstName = firstName,
        this.lastName = lastName
    }
}

const userOne = new User ("Jordan@mail.com" , "JOrdan","Tan")
const userTwo = new User ("Jordan@mail.com" , "Chris","Tan")

console.log(userOne);
console.log(userTwo);