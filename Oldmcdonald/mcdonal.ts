namespace Farm {

    const animals: Animal[] = [];

    const seeds: Food = new Food("Seeds", 40);
    const hay: Food = new Food("Hay", 100);
    const truffle: Food = new Food("Truffle", 30);

    const cow: Animal = new Animal("Cow", 20, "Mooo", hay);
    const chicken: Animal = new Animal("Chicken", 5, "bokbok", seeds);
    const turtle: Animal = new Animal("Turtle", 7, "meow", truffle);
    const horse: Animal = new Animal("Horse", 25, "whier", hay);
    const pig: Animal = new Animal("Pig", 15, "oink", truffle);

    animals.push(cow);
    animals.push(chicken);
    animals.push(turtle);
    animals.push(horse);
    animals.push(pig);

    let count: number = 0
    callAnimal();


    function callAnimal(): void {
        if (count < animals.length) {
            animals[count].eat();
            animals[count].sing();
            count++;
            setTimeout(callAnimal, 5000);
        }

    }
}