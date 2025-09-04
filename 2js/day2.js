// // 1. condition, switch
// // 2. loop , break, continue
// // 3. function

// let num = 34 // nested condition
// if (num >= 600) {
//     if (num >= 1200) {
//         console.log("Number is Gt 600 and 1200");
//     } else {
//         console.log("Number is only Gt eq 600");
//     }
// } else if (num >= 100) {
//     if (num > 500) {
//         console.log("Number is Gt 500 and 100");
//     } else {
//         console.log("Number is only Gt or eq 100");
//     }
// } else {
//     console.log("Num is less than 100");
// }
// let lic = true
// let hel = true
// let ins = true

// let fine = 0;
// if (!lic) {
//     fine += 500
// }
// if (!hel) {
//     fine += 500
// }
// if (!ins) {
//     fine += 500
// }
// console.log(fine);

// let day = 5678;
// switch (day) {
//     case 1:
//         console.log("Its Sunday");
//         break;
//     case 2:
//         console.log("Its Monday");
//         break;
//     default:
//         console.log("Its Error Day");

//         break;
// }

// // 1. initialize 2. condition 3. updation
// let a = 1;
// while (a < 10) {
//     console.log("Hello " + a);
//     a += 1;
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 0; j < 5; j++) {
//         process.stdout.write("Hello " + String(j));
//     }
//     console.log("\n");

// }

//  1            1           5 4 3 2 1
//  1 2          2 2         4 3 2 1
//  1 2 3        3 3 3       3 2 1
//  1 2 3 4      4 4 4 4     2 1
//  1 2 3 4 5    5 5 5 5 5   1


// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         break
//     } else {
//         console.log(i);
//     }
// }

// function sayHello(name, address="India") { // parameter
//     console.log(`Hello Dear, ${name}, Address: ${address}`);
// }

// sayHello("Rounak") // arguments

// let sum = (a, b) => a + b;

// IIFE -> Immediate Invoked Function Expression
// Arrow IIFE
((a, b) => console.log(a * b))(3, 5);
// Regular IIFE
(function (x, y) {
    console.log(x - y)
})(12, 4)
