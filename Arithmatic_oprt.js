// Arithmatics Operator
let a = 5;
let b = 10;

console.log("a = " + a + "b = "+b);
console.log("a + b = " + a+b);
console.log("a - b = " + a-b);
console.log("a * b = " + a*b);
console.log("a / b = " + a/b);
console.log("a % b = " + a%b);
console.log("a**b = " + a**b); // 5^10


// unary Operator
let c = 1;
console.log(c++);
console.log(c--);


//Assignment operator
let i=10;
let j=20;
i+=5;// i = i + 5

//Comparison Operator
let k=10;
let g=5;
console.log("k==g" + k==g); // False
console.log("k!=g" + k!=g); //true

//Logical Operator

// Logical AND
let condition1 = 6;
let condition2= 10;

let cond1= condition1 < condition2; //true
let cond2= condition1==6; //true
console.log("cond1 && cond2 " + cond1 && cond2);


//Logical OR
let condition3=10;
let condition4=5;

let cond3=condition3 > condition4; // true
let cond4 = condition3==9; // false
console.log("cond3 || cond4 " + cond3 || cond4); // true

//Logical Not 
let condition5 = 10;
let condition6= 43;

let cond5 = condition5 < condition6; //return true
console.log("!cond5 = " + !cond5); // print false because on Not 



