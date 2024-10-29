"use strict";
var Farm;
(function (Farm) {
    class Animal {
        constructor(_name, _hunger, _sound, _food) {
            this.set(_name, _hunger, _sound, _food);
        }
        set(_name, _hunger, _sound, _food) {
            this.name = _name;
            this.hunger = _hunger;
            this.sound = _sound;
            this.food = _food;
        }
        eat() {
            const amount = document.getElementById("amount");
            const eaten = this.food.amount - this.hunger;
            //alert(eaten + " " + this.name + " " + this.sound)
            amount.textContent = eaten.toString();
        }
        sing() {
            const name = document.getElementById("name");
            name.textContent = this.name;
            const sound = document.getElementById("sound");
            sound.textContent = this.sound;
        }
        doSpecialAction() { }
    }
    Farm.Animal = Animal;
    class Cow extends Animal {
        doSpecialAction() {
            const special = document.getElementById("special");
            special.textContent = ("gave Milk");
        }
    }
    Farm.Cow = Cow;
    class Chicken extends Animal {
        doSpecialAction() {
            const special = document.getElementById("special");
            special.textContent = ("layed an egg");
        }
    }
    Farm.Chicken = Chicken;
    class Turtle extends Animal {
        doSpecialAction() {
            const special = document.getElementById("special");
            special.textContent = ("escaped his human captivators");
        }
    }
    Farm.Turtle = Turtle;
    class Horse extends Animal {
        doSpecialAction() {
            const special = document.getElementById("special");
            special.textContent = ("helped the turtle");
        }
    }
    Farm.Horse = Horse;
    class Pig extends Animal {
        doSpecialAction() {
            const special = document.getElementById("special");
            special.textContent = ("consumed the remains left by the one rebeling");
        }
    }
    Farm.Pig = Pig;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map