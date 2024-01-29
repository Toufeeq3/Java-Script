// //Guessing Number Game 
// console.log("Hello");
// let Guessingnummber = 14;
// let i=0;
// do{
//     let number=+prompt("Enter the Guessing Number");
//     if(number===Guessingnummber){
//         console.log("Yeah You Find the Number");
//         break;
//     }
//     else{
//         i++;
//     }
// }
// while(i!==Guessingnummber);


//   let name = prompt("Enter the name ");
//   console.log(`@${name}${name.length}`);

// let n=+prompt("Enter the Size of Array");
// let marks = [n];
// for(let i=0; i<marks.length; i++){
//     marks[i]=+prompt("Enter the Marks ");
// }
// let sum=0,avg;
// for(let i=0; i<marks.length; i++){
//     sum += marks[i];
// }
// avg=sum/marks.length;
// console.log(avg);

// let arr = [250,645,300,900,50];

// for(let i=0; i<arr.length; i++){
// let arr2=(arr[i]*10)/100;
//     arr[i] -=arr2;
//     console.log(arr[i]);
// }

let number = [1,2,3,4,5,6];
number.shift();
console.log(number);
number.splice(1,1,10);
console.log(number);
number.push(9);
console.log(number);
