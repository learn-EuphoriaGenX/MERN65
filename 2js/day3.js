// callback 
// promise
// async operation
// MFR


function sayHello(name, anotherFunction) { // parameter
    console.log(`Kaise Ho! ${name}🙋🏻‍♂️`);
    anotherFunction(name, anotherFunction)
}
function sayBye(name) {
    console.log(`Bye Bye ${name}👋🏻`);
}
let sayWelcome = (name = "Samsung") => {
    console.log(`Welcome ${name}! 🫴🏻`);
}
// const name = "Madhu"
// sayHello(name, sayHello) // arguments

// setTimeout((animal = "Tiger 🐯") => {
//     console.log(`Hello animal ${animal}`);
// }, 5000)

// setTimeout((name = "Samsung") => {
//     console.log(`Welcome ${name}! 🫴🏻`);
// }, 3000)

let login = (username, password) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (username == 'admin' && password == "pass123") {
                res("Login Successfull")
            } else {
                rej('Invalid Credentials')
            }
        }, 5000)
    })
}
let reelsScrolling = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Reels Scrolling.....")
        }, 2000)
    })
}

let logout = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Logout Done")
        }, 3000)
    })
}

async function Instagram() {
    try {
        let response = await login("admin", 'pass1234')
        console.log(response);
        response = await reelsScrolling()
        console.log(response);
        response = await logout()
        console.log(response);
    } catch (error) {
        console.log(error.message || error || "Internal Server Problem");
    }
}
// Instagram()

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => n * n);
let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => n > 5)
let totalReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b, 0)






