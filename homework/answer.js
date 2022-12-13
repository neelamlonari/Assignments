
let x=" ";
for(let i=1; i<=20;i++){
    x = x + (i).toString() + ",";
  }  console.log(x);

  let y=" ";
  for( let i=1;i<=200;i++){
    if(i%2==0){
    y= y + (i).toString() + "," ;
 
   }}
    console.log(y);
    /////////
    /////fizzbuzz
    ///////
 let a="";
for( let i = 1; i<=30;i++ ) {
  
  
   if( i % 3===0 && i % 5===0){
    a=a+"fizzbuzz,";
   }else if( i%3===0){
    a=a+"fizz";
   }else if (i%5===0){
    a=a+"buzz,";
   }else{
    a = a + i+",";
  }

  }
  console.log(a);
  ///////////wild life/////
class Wildlife{
  costructor(name,species ,age, hometown){

  }
}

  const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
function birthday(input){
  input[2]= input[2]+1;
}
birthday(plantee);
console.log(plantee);
wolfy[3]="Gotham City";
console.log(wolfy);  
dart.push("Hawkins");
console.log(dart);
wolfy[0]= "Gameboy";
console.log(wolfy) ;
///////////////Yell at the Ninja Turtles////////////
const ninjaturtles = ["Donatello", "Leonardo", "Raphael"," Michaelangelo"];

let text="";
for( let x of ninjaturtles){
  //let x=0;
  text+= x + ",";
}
console.log(text.toUpperCase());
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
console.log("After sorted="+favMovies);
console.log(" Ppped element="+favMovies.pop());
console.log("Array after popping="+favMovies);
  favMovies.push("Guardians of the Galaxy");
  console.log(favMovies);
  console.log(favMovies.reverse());
 // console.log(favMovies.shift());
 console.log(favMovies.unshift("Cindrella"));
 console.log(favMovies.indexOf("Django Unchained"));
  console.log(favMovies);
 favMovies.splice(14,1, "Avatar");
 console.log(favMovies);
console.log( favMovies.length/2);
let slicedfavMovies =favMovies.slice(favMovies.length/2);
console.log(favMovies);
console.log(" sliced movies ="+slicedfavMovies);
console.log(favMovies.indexOf( "Fast and Furious"));
console.log(favMovies.indexOf("hcdkc"));
//favMovies= ["a","c","b"];///const variable value cannot be changed however values inside of array can be changed//
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];



const removed=whereIsWaldo.splice(1,1);
console.log("removed==="+removed);

console.log(whereIsWaldo);
whereIsWaldo[1].splice(2,1,"No One");
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);









