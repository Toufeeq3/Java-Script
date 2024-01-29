//Push Function  Add Value at the End of Array
let fruits = ["apple", "banana","Grapes","Watermelon"];
console.log(fruits);
console.log(fruits.push("orange"));


//Pop Function Delete Value from last of Array
let numbers = [12,34,5,64,34,3,23];
console.log(numbers);
console.log(numbers.pop());

//toString convert Array to String
let fruit = ["apple", "banana","Grapes","Watermelon"];
console.log(fruit);
console.log(fruit.toString()); // Now This is Not Array This is String


//Concate Two Arrays
let arr1 = [10,20,30,40,50];
let arr2 = [60,70,80,90,100];
let arr3 = arr1.concat(arr2);
console.log(arr3);


//Unshift it add value in to the start of Array 
let arr4 = [10,203,540,34];
arr4.unshift(43);
console.log(arr4);


//Shift It Remove First Element of Array
let arr5 = [1,2,3,4,5,6];
arr5.shift();
console.log(arr5);

//Slice Function
let arr6 = [1,2,3,4,5,6];
console.log(arr6.slice(2,5));

//Splice Function
let arr7 = [1,2,3,4,5,6];
arr7.splice(2,1,10);
console.log(arr7);

//We just add something in array through splice
arr7.splice(2,0,43,32);
console.log(arr7);

//Delete Element through splice
arr7.splice(2,1);
console.log(arr7);

//Replace Element through splice 
arr7.splice(2,1,101);
console.log(arr7);




