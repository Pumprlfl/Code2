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
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animal.js.map