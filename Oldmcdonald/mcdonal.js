"use strict";
var Farm;
(function (Farm) {
    const animals = [];
    const seeds = new Farm.Food("Seeds", 40);
    const hay = new Farm.Food("Hay", 100);
    const truffle = new Farm.Food("Truffle", 30);
    const cow = new Farm.Cow("Cow", 20, "Mooo", hay);
    const chicken = new Farm.Chicken("Chicken", 5, "bokbok", seeds);
    const turtle = new Farm.Turtle("Turtle", 7, "meow", truffle);
    const horse = new Farm.Horse("Horse", 25, "whier", hay);
    const pig = new Farm.Pig("Pig", 15, "oink", truffle);
    animals.push(cow);
    animals.push(chicken);
    animals.push(turtle);
    animals.push(horse);
    animals.push(pig);
    let count = 0;
    callAnimal();
    function callAnimal() {
        if (count < animals.length) {
            animals[count].eat();
            animals[count].sing();
            animals[count].doSpecialAction();
            count++;
            setTimeout(callAnimal, 5000);
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=mcdonal.js.map