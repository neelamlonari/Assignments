class Hamster {
    constructor(name){
      this.owner = '';
      this.name = name;
      this.price = 15;
    }
    wheelRun(){
      console.log('squeak squeak');
    }
    eatFood(){
      console.log('nibble nibble');
    }
    getPrice(){
      return this.price;
    }
  }
  /*attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:

getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
🔴 Hard Mode Save & Commit your work!
Your commit message should read something like:
"created person class"
Easy Mode Keep Going and save and run*/
class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this. hamsters = [];
        this. bankAccount = 0;
    }
    getName(){
       return  this.name;
    }
    getAge(age){
         return this.age;
    }
    getWeight(){
         return this.weight;
    }
    greet(name){
        return  `Hi , This is ${this.name}`;
    }
    eat() {
        this.weight += 1;
        this.mood += 1;
        return "ate";
    }
    exercise(){
       this.weight -= 1;
       return "exercised";
    }
    ageUp(){
        this.age += 1;
        this.height += 1;
        this.weight +=1;
        this.mood -=1;
        this.bankAccount +=10;
        return "aged";
    }
    buyHamster(hamster){
        if(this.bankAccount >= hamster.getPrice()){
         this.hamsters.push(hamster);
         this.mood +=10 ;
         this.bankAccount -= hamster.getPrice();
         return "I bought hamster";
        }else{
            return " Don't have enough money to buy hamster";
        }
    }
}/*Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice*/
const timmy = new Person("Timmy");
console.log("timmy got 1 year old"+" " +timmy.ageUp());
console.log(timmy.greet(timmy));


console.log("timmy exercised "+timmy.exercise());
console.log("timmy exercised "+timmy.exercise());
console.log("timmy got 2 year old"+" " +timmy.ageUp());
console.log("timmy got 3 year old"+" " +timmy.ageUp());
console.log("timmy got 4 year old"+" " +timmy.ageUp());
console.log("timmy got 5 year old"+" " +timmy.ageUp());
console.log(timmy);
console.log("timmy " +" "+timmy.eat());
console.log("timmy " +" "+timmy.eat());
console.log("timmy " +" "+timmy.eat());
console.log("timmy " +" "+timmy.eat());
console.log("timmy " +" "+timmy.eat());
console.log("timmys weight after eating 5 times="+" "+timmy.getWeight());
console.log("timmy exercised "+timmy.exercise());
console.log("timmy exercised "+timmy.exercise());
console.log("timmy exercised "+timmy.exercise());
console.log("timmy exercised "+timmy.exercise());
console.log("timmy exercised "+timmy.exercise());
console.log("timmy's weight aher exercising 5 times= "+" "+timmy.getWeight());

console.log("timmy got 6 year old"+" "+timmy.ageUp());
console.log("timmy got 7 year old"+" " +timmy.ageUp());
console.log("timmy got 8 year old"+" " +timmy.ageUp());
console.log("timmy got 9 year old"+" " +timmy.ageUp());
console.log(timmy);

const gus = new Hamster("gus");
gus.owner = "timmy";
timmy.buyHamster(gus);
console.log(timmy);
console.log("timmy got 10 year old"+" " +timmy.ageUp());
console.log("timmy got 11 year old"+" " +timmy.ageUp());
console.log("timmy got 12 year old"+" " +timmy.ageUp());
console.log("timmy got 13 year old"+" " +timmy.ageUp());
console.log("timmy got 14 year old"+" " +timmy.ageUp());
console.log("timmy got 15 year old"+" " +timmy.ageUp());
console.log(timmy);
console.log("timmy " +" "+timmy.eat());
console.log("timmy " +" "+timmy.eat());
console.log(timmy);
console.log("timmy exercised "+timmy.exercise());
console.log("timmy exercised "+timmy.exercise());
console.log(timmy);




















