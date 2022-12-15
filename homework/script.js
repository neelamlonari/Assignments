/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
...
How do we assign a value to a variable? let somevar = 10
How do we change the value of a variable? somevar = 12
How do we assign an existing variable to a new variable? let newvar = somevar
Remind me, what are declare, assign, and define? no wrong answers, they should show an understanding of how to use these words
What is pseudocoding and why should you do it? no wrong answers but they should understand that psuedo code is not code its plain english description of what they want to accomplish
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? no wrong answers but they should defend what they say*/
let somevar = 10; //declaration of variable somevar
somevar = 12;//assign valuue to variable
let newvar = somevar;//assigning somevar variable to new variable newvar which is 12
/*For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean*/
let firstVariable = "Hello World";
firstVariable = 15;
let secondVariable = firstVariable;
secondVariable = "Good Morning";
console.log(firstVariable);
let myName = "Neelam";
console.log(" Hello, my name is" +" "+myName);
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
///Cow///
let animal = 'cow';
if(animal==='cow'){
    console.log("mmoooooo");
}else{
    console.log("Hey! You're not a cow.");
}
personAge=15;
if(personAge >= 16){
    console.log("Here are the keys!")
    } else {
    console.log("Sorry, you're too young.");
    }
    /*Write a loop that will print out all the numbers from 0 to 10, inclusive
Write a loop that will print out all the numbers from 10 up to and including 400
Write a loop that will print out every third number starting with 12 and going no higher than 4000
let x= " ";
for( let i=0;i<=10;i++){
    x = x + (i).toString() + ",";
}console.log(x);//print 0 to 10
let p= " ";
for( let i= 10;i<=400;i++){ 
    p = p + (i).toString() + ",";
}console.log(p);//printing 10 to 400

let x= "";
let i= 12;

do{
    i = i + 3;
    x = x + (i).toString() +"," ;
   }
while (i<=3997) ;
     console.log(x);*///printing 12 to 4000 numbers skipping 2 numbers in every two numbers
 
 let i =1;
    while(i<=100){
        if( i%2===0){
        
        console.log(i +""+ "<-- is an even number");
        } else{
        console.log(i);
    }  i++;     
}  
let p ="";
for (i =1;i<=100;i++)  {
    if(i%5==0){
        console.log( "I found a "+ i +" High five!" );
    }else if (i%3==0){
        console.log("I found a "+ i +" There is a crowd!");
    }else{
        console.log(i);
}
}   
let bank_account;
bank_account = 0;
for ( let i=1;i<=100;i++){
bank_account +=i;
}
console.log(bank_account * 2);
///arrays///
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
let s=120;
////if -else////
if(s<100){
    console.log(s+ " This is small number");
}else {
    console.log(s+ " This is Big number");
}
///if else if////
let num=5;
if(num<5){
    console.log("little number");
    }else if(num>10){
        console.log("big number");
}else {
    console.log("monkey");}
    ////////array commands////
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
 
    console.log (`Kristyn is rocking that  ${kristynsCloset[2]} today!`);
    kristynsCloset.splice(5, 0, 'raybans');
    console.log(kristynsCloset);
    kristynsCloset.splice(6, 1, 'stained knit hat');
    console.log(kristynsCloset);
    thomsCloset[0][0];
    thomsCloset[1][0]
    thomsCloset[2][1]
    console.log(`Thom is looking super fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]},${thomsCloset[2][1]} `)
    thomsCloset[1][2] = "Footie Pajamas"
    ///function/////
    const printGreeting = (name) => {
        return `Hello, ${name}`
      }
      
      
      console.log(printGreeting("Slimer"));
      const printCool = (name) =>{
        return `${name} is cool`
      }
      console.log(printCool("Captain Reynolds"));
     /////////calculateCube//////
     
     const calculateCube = (num) =>{
        return num * num * num
      }
      console.log(calculateCube(5));
      //////isvowel/////
      function isVowel(char){
        const arr = ['a', 'e', 'i', 'o', 'u']
      
        return arr.includes(char.toLowerCase())
      }
      console.log(isVowel("a"));
      ////////string length////
      const getTwoLengths = (str1, str2) => [str1.length, str2.length];
      console.log(getTwoLengths("Hank", "Hippopopalous"));
      /////multi string length array///
      const getMultipleLengths = (arr) => {
        const ans = []
        arr.forEach((str) => {
          ans.push(str.length)
        })
        return ans
      }
      console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//////////////Max of three numbers////////////////
const maxOfThree = (num1, num2, num3) => {
    const arr = [num1, num2, num3]
  
    arr.sort((a,b) => {
      return b - a
    })
  
    return arr[0]
  }
  console.log(maxOfThree(6, 9, 1));
  ////////biggest length string array/////
  const printLongestWord = (arr) => {
let ans = arr[0]
let length = arr[0].length
arr.forEach((str) => {
  prevLength = length
  length = Math.max(ans.length, str.length)
  if(prevLength !== length){
    ans = str
  }    
})
return ans
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
///making object and changing proprties////
const user= {
    name: 'john',
    age:40,
    e_mail:'johnd@hotmail.com',
    purchased:[],
    
    }   

user.e_mail= 'johnny@gmail.com';
console.log(user);
console.log(user.age++);
 console.log(user.age);
user.location='pune';
console.log(user);
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs") ;
//console.log(user.purchased[2]);
///friend object////
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'newyork',
    purchased:[]
    
}
console.log(user.friend.location);

purchased:[]
    

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
    name : 'Dolly',
    breed : 'fiancy',
    age:3
}
console.log(cat1.age);
console.log(cat1.breed);
const cat2 = {
    name : 'John',
    breed : 'Moe',
    age : 4
}
function combineCats(mama,papa){
    console.log((cat1.name+cat1.age+cat1.breed),(cat2.name+cat2.age+cat2.breed));
}
combineCats(cat1,cat2);
combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
 combineCats(cat1.name + cat2.name, age = 1 ,  cat1.breed + '-' + cat2.breed);
 combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2));

   
   
   



      
















        