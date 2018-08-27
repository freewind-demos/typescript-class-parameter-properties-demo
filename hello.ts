class User {
    constructor(public name: string, email: string) {
    }
}

const user = new User('Mike', 'mike@test.com')

console.log(user)
console.log(user.name)
// console.log(user.email)
