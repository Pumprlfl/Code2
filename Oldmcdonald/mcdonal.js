"use strict";
class Animal {
    constructor(_type, _hunger, _sound) {
        this.set(_type, _hunger, _sound);
    }
    set(_type, _hunger, _sound) {
        this.type = _type;
        this.hunger = _hunger;
        this.sound = _sound;
    }
}
class Food {
    constructor(_type, _amount) {
        this.set(_type, _amount);
    }
    set(_type, _amount) {
        this.type = _type;
        this.amount = _amount;
    }
}
const cow = new Animal("Cow", 20, "Mooo");
const chicken = new Animal("Chicken", 5, "bokbok");
const turtle = new Animal("Turtle", 7, "meow");
const horse = new Animal("Horse", 25, "whier");
const pig = new Animal("Pig", 15, "oink");
const seeds = new Food("Seeds", 40);
const hay = new Food("Hay", 100);
const truffle = new Food("Truffle", 30);
console.log(cow);
console.log(truffle);
//# sourceMappingURL=mcdonal.js.map