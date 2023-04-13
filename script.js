
 var a= 34;
a=45;
a= 'rahul';

var a = 54;
console.log(a);
console.log('hello world');
var myfirstName ='rahul';
console.log(myfirstName);
 
let b='my name is rahul';
 b='arman khan';
 {
    let b= 'rohit' ;
    console.log(b);
 }
console.log(b);
const c='romio';
console.log(c);
console.log(b);
const d={name: "rahul",
country: "india"}

console.log(d);
console.log( typeof d);

let f= {
   name:"abhay ", 
   class:"bca (final year)",
   college: "ignou"

}
 



console.log(f);
console.log(typeof f); 
const score=102;
const batsman = "rohit sharma"
console.log(score);
 console.log(typeof batsman);
  
/*
 let a =34;
 
 let b = 15;

 let c= (a+b);
 
 console.log(c);

 console.log(c);

 console.warn("this is warning");
 let h= 44;
 let g= 500;
 console.log(typeof h,g);
 console.log(h,g);
 let isgreater= 4>1;
 */
//  console.log(isgreater);
 console.log(typeof isgreater);
 console.clear();
let a1=(23+"arvind");
console.log(typeof a1);
console.log(a1);

// arithmetic operators

let v= 45;
let u=4;

console.log( "v+u=",v+u);
console.log( "v-u=",v-u);

console.log("v/u=",v/u);

console.log("v%u=",v%u);

console.log( "v*u=",v*u);

console.log("v**u=",v**u);
 console.log("v++u=",v++ );
// console.log (v);

console.log("++v=",++v);
console.log( "--v=",--v);
console.log( "v--=",v--);
console.log (v);


// assignment oprators
let assignment = 5;
assignment +=6;
assignment **=3;
assignment -=1300;

console.log(assignment );


// comparison operator

let comp1 = 6; 
let comp2 = "6";
console.log("comp1 == comp2 =", comp1==comp2);
console.log("comp1 != comp2 =", comp1!=comp2);
console.log("comp1 === comp2 =", comp1===comp2);
console.log("comp1 !== comp2 =", comp1!==comp2);
console.log("comp1 >= comp2 =", comp1>=comp2);
console.log("comp1 <= comp2 =", comp1<=comp2);


// const fathersname= " deelip ray";
// prompt("enter the value");
// confirm("hello ");

let A1= 43;
let a2= 54;
if (A1<a2) {
   console.log(" b is greater");
   
}
//  if condition are executed when condition is always true;


// if else




let month= 15+ "months";
let hours =18+ "hours";
let remaining ="time over";
if (month<=hours){
  console.log(hours);

 
} 
else{
   console.log(remaining);
}
let day1 = 1+ "month";
let time1 = 18 +" hours";
let remaining1= "time up";
if (day1>=time1){
   console.log(day1);
}
else {
   console.log(remaining1);

}


let student="rahul";
let gender= "male";
if (student==gender){
   console.log("hello mr."+ student);
} else{
   console.log("hello kumar " + student);
}

// else if


let marks= 85;
if ( marks>=80 &&marks<=100){
   console.log("you are in merit");
}
else if(marks>=60 && marks<=80){
   console.log("you are 1st division.");
}
else if ( marks>=45 && marks<=59){
   console.log("you are in 2nd division");
}
else if (marks>= 33 && marks <=45){
   console.log("you are in 3rd division");
}
else if (marks >= 33){
   console.log("you are fail");

}
else {console.log("enter a valid number");}

// ternary operators

let a3= "100";
let B; 
let C;
B=(a3===100) ? "true":" false";
C= (a3<=200)? "true": "false";

console.log (b);
console.log (c);

// EXAMPLE 02

let tempIndegree =( 55);

if (tempIndegree>40)
{console.log( "weather is too hot");

}
else if(tempIndegree>30){
   console.log("lets fo for swim");
}

 else if(tempIndegree>20){
   console.log("weather i look like cool");
 }

 else if(tempIndegree>10){
   console.log("it is very cold outside");

 }
else {console.log("extermely cold");}


// switch case
var day =4 ;
switch ( day){
   case 1:

      console.log("today is monday ");
   break;
   case 2:
      console.log("today is tuesday");
   break;
   case 3:
      console.log("today is wednesday"); 
   break;
   case 4:
      console.log("today is thursday");
   break;
   case 5:
      console.log("today is friday ");
   break;
   case 6:
      console.log("today is saturday");
   break;
   case 7:
      console.log("today is sunday");
   break;
   default :
   console.log("enter the valid day");
}




function name() {
   console.log("hello java script");}

name();
name();

function rahul(){
   console.log("welcome to bihar");
}

// function with parameter

function firstName(fname, lname,  ){
   console.log("Hello"+ fname +" " + lname  );

}
firstName(" rahul" , "kumar" );
firstName(" shubham" , "kumar" );

function addition(a,b)
{
   console.log("addition of two value is ", a+b-22); 
}
addition(54,45);
addition(23,40);

function that(){
   console.log("welcome to java script");
}


// space between two string

var abc= 'rahul';
var xyz= 'rohit';
console.log(abc  +" "+ xyz);
 
//  function with return value

function add(fname, lname){
   let f=(fname +" " + lname);
      
   return f;
}
 let fn=add("rahul ","kumar");
 console.log(fn);

function additon(math, eng , sci){
   let s=math + eng + sci ;
   return s;
   
}
function percentage(tt){
   let s2= s1/300*100;
   console.log(s2);
}
 let s1=additon(60 , 65 , 75);

percentage(s1);

// // for loop
 
for(let i=0; i <4; i++)
{
   console.log(i);
}



// for in loop

let obj= {
 rahul :65,
 rohit : 72,
  gulshan : 54,
   gaurav: 34
} 
for(let a in obj)
console.log("marks of "+ a +" are "+ obj[ a ]);


// while loop
var a =1;

while(a<=10){
   console.log( a + " jay shree ram" );
   a= a+1;                          //it is important in while loop
   
}

// addition of natural number
let sum= 0;
//  let n = prompt("enter the value of n");
//  n= Number.parseInt(n)
for(i=0;i<4; i++){
   sum+=(i+1)          
      console.log(i);
   
}                   
console.log( " sum of first " + "natural no. is "+ sum);
console.log( " sum of first " + "natural no. is "+ sum);



// even number


for( a=0; a<=10; a++){
   
   if (a % 2 ==0){
      console.log( a);
   }
   }
//odd number

 for(a=1; a<=9;a++){
   if (a % 2!==0){
      console.log(a);
   }
 }
  
//  nested loop
for(let e = 1; e <= 5; e++){
   for(let f = 1; f <= e; f++){
      console.log(f + " " );
   }
}

console.log("some string method");

// string methods

let friend= "amarnath";
console.log(friend);
console.log(friend.length);
console.log(friend [0]);
console.log(friend [3]);


// template literals
 
let boy1= "pramod";
let boy2=" nikhil";

// pramod is a friend of nikhil

console.log(`${boy1} is a friend of ${boy2}`);

// escape sequence characters

let fruit= `bana\`na`;  
console.log(fruit);
console.log(fruit.length);

// date
let dt=  Date()

console.log(   " today is " +  dt);

