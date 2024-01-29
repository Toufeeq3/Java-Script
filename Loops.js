//For LOOP
for(let i=0; i<=5; i++){
    console.log("Hello World "); //6 time Execute
}

//While LOOP
let i=1;
while(i<=5){
    console.log("HEllO");
    i++;
}

//do While Loop
let j=1;
do{
    console.log("Hello");
    i++;
}
while(i<=5);


//For of Loop  This loop will help in strings and Arrays
let str="This is My World ";
for(let i of str){    //itterator
    console.log(`i : ${i}`);
}


//for-in-loop
let student={
    name : "Toufeeq",
    RollNo : 221343,
    Cnic : 14101-7224861-9
};
for(let i in student){
    console.log(`i: ${i} ${student[i]}`);
}