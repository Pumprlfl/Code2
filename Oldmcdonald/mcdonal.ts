class Animal {
    type : string;
    hunger : number;
    sound : string;

    constructor (_type:string, _hunger:number, _sound:string){
        this.set(_type, _hunger, _sound)
    }
    set(_type:string, _hunger:number, _sound:string):void{
        this.type=_type;
        this.hunger=_hunger;
        this.sound=_sound;
    }
}

class Food {
    type: string; 
    amount: number;

    constructor (_type:string, _amount: number){
        this.set (_type, _amount)
    }
    set (_type:string, _amount:number):void{
        this.type=_type;
        this.amount=_amount
    }
}

const cow: Animal = new Animal ("Cow", 20, "Mooo");
const chicken: Animal = new Animal ("Chicken", 5, "bokbok");
const turtle: Animal = new Animal ("Turtle", 7, "meow");
const horse: Animal = new Animal ("Horse", 25, "whier");
const pig: Animal = new Animal ("Pig", 15, "oink");

const seeds: Food = new Food ("Seeds", 40);
const hay: Food = new Food ("Hay", 100)
const truffle: Food = new Food ("Truffle", 30)

console.log(cow);
console.log(truffle);