
/*let x=" ";
for(let i=1; i<=20;i++){
    x = x + (i).toString() + ",";
  }  console.log(x);

  let x=" ";
  for( let i=1;i<=200;i++){
    if(i%2==0){
    x= x + (i).toString() + "," ;
 
   }}
    console.log(x);
    /////////
    /////fizzbuzz
    ///////
 let x="";
for( let i = 1; i<=30;i++ ) {
  
  
   if( i % 3===0 && i % 5===0){
    x=x+"fizzbuzz,";
   }else if( i%3===0){
    x=x+"fizz";
   }else if (i%5===0){
    x=x+"buzz,";
   }else{
    x = x + i+",";
  }

  }
  console.log(x);
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
console.log(wolfy) ;*/
///////////////Yell at the Ninja Turtles////////////
const ninjaturtles = ["Donatello", "Leonardo", "Raphael"," Michaelangelo"];

let text="";
for( let x of ninjaturtles){
  //let x=0;
  text+= x + ",";
}
console.log(text.toUpperCase());

  
