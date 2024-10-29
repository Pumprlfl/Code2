namespace Farm {
    export class Animal {
        name: string;
        hunger: number;
        sound: string;
        food: Food

        constructor(_name: string, _hunger: number, _sound: string, _food: Food) {
            this.set(_name, _hunger, _sound, _food)
        }

        set(_name: string, _hunger: number, _sound: string, _food: Food): void {
            this.name = _name;
            this.hunger = _hunger;
            this.sound = _sound;
            this.food = _food
        }

        eat(): void {
            const amount: HTMLSpanElement = document.getElementById("amount")!;
            const eaten: number = this.food.amount - this.hunger;
            //alert(eaten + " " + this.name + " " + this.sound)
            amount.textContent = eaten.toString();
        }

        sing(): void {
            const name: HTMLSpanElement = document.getElementById("name")!;
            name.textContent = this.name
            const sound: HTMLSpanElement = document.getElementById("sound")!;
            sound.textContent = this.sound
        }
        doSpecialAction(): void { }
    }

    export class Cow extends Animal {

        doSpecialAction(): void {
            const special: HTMLSpanElement = document.getElementById("special")!;
            special.textContent = ("gave Milk");
        }
    }
    export class Chicken extends Animal {

        doSpecialAction(): void {
            const special: HTMLSpanElement = document.getElementById("special")!;
            special.textContent = ("layed an egg");
        }
    }
    export class Turtle extends Animal {

        doSpecialAction(): void {
            const special: HTMLSpanElement = document.getElementById("special")!;
            special.textContent = ("escaped his human captivators");
        }
    }
    export class Horse extends Animal {

        doSpecialAction(): void {
            const special: HTMLSpanElement = document.getElementById("special")!;
            special.textContent = ("helped the turtle");
        }
    }
    export class Pig extends Animal {

        doSpecialAction(): void {
            const special: HTMLSpanElement = document.getElementById("special")!;
            special.textContent = ("consumed the remains left by the one rebeling");
        }
    }
} 