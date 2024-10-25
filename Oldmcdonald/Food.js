"use strict";
var Farm;
(function (Farm) {
    class Food {
        constructor(_type, _amount) {
            this.set(_type, _amount);
        }
        set(_type, _amount) {
            this.type = _type;
            this.amount = _amount;
        }
    }
    Farm.Food = Food;
})(Farm || (Farm = {}));
//# sourceMappingURL=Food.js.map