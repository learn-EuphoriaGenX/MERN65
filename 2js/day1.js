// 1. variable
// 2. data type
// 3. operators
// variable declare rule -> (a-z)/(0-9)/(_) + (!reserved_char)

let a = 1; // is a block-scoped variable
const b = 2; // is a constant block-scoped variable
var c = 3; // is a function-scoped/global variable

let a1 = 1; // Number data type (integer)
let a2 = 1.2; // Number data type (floating)
let a3 = "hello"; // String Data type
let a4 = BigInt(111112345678987654321) // Bigint
let a5 = true | false; // Boolean
let a6 = undefined;
let a7 = null;
let a8 = ["Apple", "banana", false, 12.5, null]
let a9 = {
    a: "Apple",
    b: "banana",
    c: false,
    d: 12.5,
    e: null
}

// arithmatic operators -> + , -, *, /, %,
// assignment operators -> = , +=, -=, *=, /=, %=
// comparison operators -> > , <, >=, <=, ==, ===, !=, !== 
// logical operators -> &&, ||, !
// bitwise operator -> &, | , >>, <<

console.log(15 >> 2); // 1111 > 11 (right shift)
console.log(15 << 2); // 1111 > 111100 (left shift)










