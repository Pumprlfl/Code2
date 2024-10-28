"use strict";
var asteroids;
(function (asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        asteroids.crc2 = canvas.getContext("2d");
        asteroids.crc2.fillStyle = "black";
        asteroids.crc2.strokeStyle = "white";
        asteroids.createPaths();
        console.log("Asteroids paths:", asteroids.asteroidPaths);
    }
})(asteroids || (asteroids = {}));
//# sourceMappingURL=asteroidstask.js.map