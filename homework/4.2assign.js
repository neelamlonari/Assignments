/*How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?*/


let char;//declare
 char ='B';//assigning
 console.log (char);
 /*-Pseudocoding- is an informal way of program designing.Planning computer algorithms with pseudocode makes you meticulous. It helps you explain exactly what each line in a software program should do.
  This is possible because you are in full control of everything, which is one of the great features of pseudocode.*/
  // 30%-70%

/*  Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean*/
let firstVariable ="Hello World";
firstVariable = 12;
let  secondVariable = firstVariable;
secondVariable = "Good Morning";
console.log(firstVariable);
let yourName = "Neelam Lonari";
console.log("Hello, my name is " +yourName);




/*C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. 
Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
  */const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false &&false && false && false &&false || true);
  console.log(false === false);
  console.log(e ==='Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log((48).toString() === '48');/*
D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit*/
let animal= "cow";
if ( animal="cow"){
    console.log("moooooo");
    } else{
        console.log( "Hey! You're not a cow.");
    }
   /* Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, 
or, if the age is younger than 16, a message should print "Sorry, you're too young."*/
let personsAge = 16 ;
if(personsAge >= 16){
    console.log( "Here are the keys!");
}else{
    console.log("Sorry, you're too young." );
    }/*Write a loop that will print out all the numbers from 0 to 10, inclusive
    Write a loop that will print out all the numbers from 10 up to and including 400
    Write a loop that will print out every third number starting with 12 and going no higher than 4000*/
    for ( let i=0; i<=10; i++){
        console.log(i);
    }
    let p="";
    for (let i=10; i<=400;i++) {
      p= p + (i).toString() + ",";
    }console.log(p);
    let m= "";
    let i= 9;
    
    do{
        i = i + 3;
        m= m + (i).toString() +"," ;
       }
    while (i<=3997) ;
         console.log(m);
       /*  Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"*/
let j ="";
for (let i =1; i <=100; i++){
   j = j + (i).toString() +",";
 } console.log(x);
let x ="";
let i=1;
while (i<=100) {
    if(i%2===0){
        console.log(i +"<-- is an even number");
    }else{
        console.log(i);

    }
    i++;
}
let i=1;
while (i<100){
     if (i%5==0 && i%3===0){
        console.log(i+"High Five! and Three is a crowd !");  
      }else if (i%5==0) {       
         console.log(i+"High Five!!");
    }else if(i%3===0){
        console.log (i+" Three is a crowd!");
    }else{
    console.log(i +" I found a number");
}i++;;
}
/*Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.*/
let bank_account;
bank_account= 0;
for(let i =1; i<=100 ; i++){
    bank_account +=i;
}console.log(bank_account*2 );
const quotes =["hello","world","beuti"];
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2]= "World";
console.log(randomThings);
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[4]= "Octocat";
ourClass[5] = "Cloud City" ;
console.log(ourClass);

const myArray = [5, 10, 500, 20];
myArray[4]="argon";
myArray[5] ="salty";
console.log( myArray);
myArray[0]= "Bob Marley";
myArray.pop();
console.log( myArray);
myArray.reverse();
console.log( myArray);
let integer = 120;
if ( integer < 100 ){
    console.log("little number");
}else (integer >= 100){
    console.log("big number");
}
/*console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".*/
let num = 5;
if(num<5){
    console.log("little number");
    }else if(num>10){
        console.log("big number");
}else {
    console.log("monkey");}

   /* What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
In the same way, access one item from Thom's pants array.
Access one item from Thom's accessories array.
Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

    console.log( "Kristyn is rocking that "+kristynsCloset[2]+ " today!" );
    kristynsCloset.splice(6,0,"raybans") ;  
    console.log(kristynsCloset);
    kristynsCloset[5]="stained knit hat";
    console.log(kristynsCloset);
    console.log(thomsCloset[0][0]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[2][1]);
console.log( "Thom is looking fierce in a"+" " +thomsCloset[0][0], thomsCloset[1][0],  thomsCloset[2][1]+"!");
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.//
console.log(thomsCloset[1][2]="footie Pajamas");
console.log(thomsCloset[1]);
 function printGreeting (name){
   return "Hello there" +" "+ name;
}
    console.log(printGreeting ("Slimer"));
function printCool(name){
     return `I am  ${name}`;
}
    console.log(printCool("Captain Reynolds"));
 function calculateCube (num){
     return num*num*num;
 }
 console.log(calculateCube(5));
 function isVowel(char){
    if(char =="a"||char =="e"||char=="i"||char=="o"||char=="u"){
      return true;  
    }else{
        return false;}
 }
 console.log(isVowel("p"));
 const getTwoLengths = ["Hank", "Hippopopalous"] 
 const a2 = getTwoLengths.map(function(s) {return s.length;})
 console.log(a2);

 const getMultipleLengths = ["hello", "what", "is", "up", "dude"];
const a1 = getMultipleLengths.map(function(s) {return s.length;})
console.log(a1);
 function maxOfThree (a ,b,c) {
 if(a>=b && a>=c ){
    return a;
}else if( b>=a && b>=c ){
    return b;
}else if( c>a && c>b ) {
    return c;
}}
console.log(maxOfThree(11,9,11));

const str1 = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];

function printLongestWord (arr){
    let result = '  ';
    for (let i=0;i < arr.length;i++ ){
let currentItem = arr[i];
if(currentItem.length > result.length){
    result = arr[i];
}
}
return result;
}
console.log(printLongestWord(str1));
 const user= {
    name: 'john',
    age:40,
    e_mail:'johnd@hotmail.com',
    purchased:[],
    
    }   

user.e_mail= 'johnny@gmail.com';
console.log(user);

    //user.age++
    //return (user.age);

    

 //console.log(birthday());
 console.log(user.age++);
 console.log(user.age);
user.location='pune';
//console.log(user);
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs") ;
//console.log(user.purchased[2]);
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'newyork',
    purchased:[]
    
}
console.log(user.friend.location);
/*Console.log just the friend's location
CHANGE the friend's age to 55
The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
Console.log just "A latte" from the friend's purchasedarray.*/
user.friend.age = 55;
user.friend.purchased.push("The One Ring","A latte");
console.log(user.friend.purchased[1]);
for( let i=0; i<user.purchased.length; i++){
    console.log(user.purchased[i]);
}
for( i=0; i< user.friend.purchased.length;i++)
{
    console.log(user.friend.purchased[i]);
}
function  updateUser(){
    user.name=(user.name).toUpperCase();
    user.age++;
}

//updateUser();
//console.log(user.name);
//console.log(user.age);

function oldAndLoud(person){
 person.name=(user.name).toUpperCase();
 person.age=user.age++;   

}
oldAndLoud(user);
console.log(user.name);
console.log(user.age++);
///////hungry mama cat program///
const cat1 ={
    name : 'jessica',
    breed : 'Moe',
    age:3
}
console.log(cat1.age);
console.log(cat1.breed);
const cat2 ={
    name:'Mona',
    breed: 'ambre',
    age: 4
}
function combineCats(mama,papa){
    console.log ((mama.name+mama.age+mama.breed),(papa.name+papa.age+papa.breed));
    const cat3={
        name:mama.name+papa.name,
        age:1,
        breed:mama.breed+'-'+papa.breed
    }
    return cat3;
}
combineCats(cat1,cat2);
combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
console.log(combineCats(cat1, cat2));
combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2));







    
    

