class User {
    constructor (email, firstName, lastName) {
        this.email = email,
        this.firstName = firstName,
        this.lastName = lastName
        this.score = 0;
    }
    login () {
        console.log(this.email, 'just log in');
        return this;
    }
    logout () {
        console.log(this.email, 'just log out');
        return this;
    }
    updateScore () {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}


class Admin extends User {
    deleteUser (user) {
        users = users.filter((u)=>{
            return u.email != user.email;
        })
    }
}

const userOne = new User ("Dan@mail.com" , "Dan","Tan")
const userTwo = new User ("Jordan@mail.com" , "Chris","Tan")
const userThree = new User ("Deanna@mail.com" , "Deanna","Tan")
const admin = new Admin("Jema@mail.com", 'Jema', 'Galanza')


var users = [userOne, userTwo, userThree, admin];
console.log(users)
admin.deleteUser(userOne)
console.log(users)


// admin.deleteUser(userTwo)



