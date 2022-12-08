
class Dinner{
    constructor (appetizer,entree,dessert){
        this.appetizer=appetizer;
        this.entree=entree;
        this.dessert=dessert;
    }
    dinnerType(){
          return `This is todays Menu ${this.appetizer} and main course ${this.entree} with ${this.dessert}`;
    }
}

  /*const rani= new Dinner('Macroni & cheeze', 'Chicken Marsalla','Chocolate lava cake'); *testing*-method works on class Dinner
 console.log( rani.dinnerType());*/

class Chef extends Dinner{
    constructor(appetizer,entree,dessert,veg){
        super(appetizer,entree,dessert);
        this.veg=veg;
         }

    dineIn(appetizer){
        return `Here we serve " ${this.appetizer} , ${this.dessert}, ${this.entree}  with complementary Drink".`;
    }
   togo(entree){
        return `"Specialised ${this.appetizer},${this.entree} or ${this.veg} with SoftDrink"`;
    }
    italian(veg){
        return `"Our ${this.appetizer} , ${this.veg},${this.entree}Menu "`;
    }

}
 const roy = new Chef ('Macroni & Cheeze', 'Chicken Marsalla','Chocolate lava cake','vegBarbeque');
 const chef2 = new Chef ( 'Fench Fries','Fettucine Alfreddo','cheery Pie','salad');
 const chef3 = new Chef ( 'Minnestrone Soup','five cheese Pizza','Lemon roll','Veg Platter');
 console.log (roy.dineIn('appetizer'));
 console.log ("------------Togo order from child class method---" +roy.togo('entree') );
 console.log (roy.italian('veg'));
 console.log( chef2.togo('entree'));
 console.log("======Parent class method works===="+ chef3.dinnerType());
 console.log(chef3.dineIn('appetizer'));
