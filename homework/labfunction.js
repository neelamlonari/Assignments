

class Hamster{
    constructor(owner= " ", name, price=15){
                this.owner=owner;
                this.name=name;
                this.price=price;
    }
 wheelRun(){
        return "squeak squeak";
 }
 eatFood() {
    console.log  ( "nibble nibble");
 }
 getPrice(){
     return this.price;
 } 
}

class Person  {
    constructor(name,age=0, height=0, weight=0, mood=0 ,hamsters=[],bankAccount=0){
        this.name=name;
        this.age=age;
        this.height=height;
        this.weight=weight;
        this.mood=mood;
        this.hamsters=hamsters;
        this.bankAccount=bankAccount;

    }
    getName(){
     return this.name;
    }
   getAge() {
        //  this.age=age;
          return  this.age;
    }     
    getWeight() {
         return this.weight;
    }    
     greet(name){  
       return `Hi , this is ${this.name}`;
    }
     eat(arg1){
        this.weight+= arg1;
        this.mood+= arg1;
        return arg1;
     }
     exercise() {
        this.weight -=1;
         return "excercised";
         
     }
     ageUp(){ 
        this.age +=1;
        this.height +=1;
        this.weight +=1;
        this.mood -=1;
        this.bankAccount += 10;
        return 'aged';
     }
     
    buyHamster(hamster){
        if( this.bankAccount>=hamster.getPrice()){

        
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
        }else{
            console.log('you dont have enough money to buy hamster');
        }
    } 
}

       const timmy = new Person("Timmy");
       console.log( timmy.greet());
       console.log ("Timmy's original age = "+timmy.getAge());
       console.log ("Initial weight ="+timmy.getWeight());
       console.log ("Timmy eat 5 times="+timmy.eat(5));
       console.log ("weight after eating = "+timmy.getWeight());
       console.log( timmy.ageUp());
       console.log ("Age after ageup "+timmy.getAge());
       console.log (timmy.exercise());
       console.log ("Weight after excercise "+timmy.getWeight());


       const gus = new Hamster("Timmy","gus");
       timmy.buyHamster(gus);
       console.log("checking Timmy's Bank Account after buying hamster="+timmy.bankAccount);
       timmy.ageUp();
       console.log("Timmy's bankAccount after incrementing Age="+timmy.bankAccount);

        timmy.buyHamster(gus);
        console.log(" Timmy's Bank balance after buying Gus="+ timmy.bankAccount);


       
       
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
    const rani= new Dinner('Macroni & cheeze', 'Chicken Marsalla','Chocolate lava cake');
     console.log( rani.dinnerType());

    class Chef extends Dinner{
        constructor(appetizer,entree,dessert,veg){
            super(appetizer,entree,dessert);
            this.veg=veg;
             }

        dineIn(appetizer){
            return `Our ${this.appetizer} , ${this.dessert}, ${this.entree}  with complementary Drink.`;
        }
       togo(entree){
            return `Specialised ${this.appetizer},${this.entree} or ${this.veg} with SoftDrink`;
        }
        italian(veg){
            return `Our ${this.appetizer} , ${this.veg},${this.entree}Menu `;
        }
    }
     const roy = new Chef ('Macroni & Cheeze', 'Chicken Marsalla','Chocolate lava cake','vegBarbeque');
     const chef2 = new Chef ( 'Fench Fries','Fettucine Alfreddo','cheery Pie','salad');
     const chef3 = new Chef ( 'Minnestrone Soup','five cheese Pizza','Lemon roll','Veg Platter');
    console.log (roy.dineIn('Macroni & Cheeze'));
     console.log ("------------Togo order from child class method---"roy.togo('entree') );
     console.log (roy.italian('veg'));
     console.log( chef2.togo('entree'));
     console.log("======Parent class method works====" chef3.dinnerType());
     console.log(chef3.dineIn('appetizer'));


      
      


 
