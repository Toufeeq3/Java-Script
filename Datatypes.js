//Primitive Types in  Js

// Number Type
let number = 10;
console.log(number);
console.log(typeof number); // This line will show the type of number 
 
// String Type
let FullName = "Toufeeq Rehman";
console.log(FullName);
console.log(typeof FullName); // This line will print String 

// Boolean Type
isFolllow = true;
console.log(isFolllow);
console.log(typeof isFolllow); // This line will print  boolean value

// Undefined
let a;
console.log(a); // undefined
console.log(typeof a); // This line will print undefined because we cannot assign any value to a variable

//Null
let x = null;
console.log(x);
console.log(typeof x ); //This will print object

// Big Int
let nmber = BigInt("123");
console.log(nmber);
console.log(typeof nmber); // This will print BigInt

//Symbol
let Symbole = Symbol("Hello!");
console.log(Symbole);
console.log(typeof symbole); // This will print Symbol


// Non Primitive type in Js 

// Object
const Student = {
    fullName : "Toufeeq Rehman",
    age : 20,
    CGPA : 3.4 ,
    isPass : true
};
console.log(Student);
console.log(typeof Student); // This will print Object

// How to access one value from object like fullName

console.log(Student.fullName);
console.log(Student["fullName"]);

//Object is collection of different variables