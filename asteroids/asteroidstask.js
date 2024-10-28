"use strict";
var asteroids;
(function (asteroids_1) {
    window.addEventListener("load", handleLoad);
    const asteroids = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        asteroids_1.crc2 = canvas.getContext("2d");
        asteroids_1.crc2.fillStyle = "black";
        asteroids_1.crc2.strokeStyle = "white";
        asteroids_1.crc2.fillRect(0, 0, asteroids_1.crc2.canvas.width, asteroids_1.crc2.canvas.width);
        asteroids_1.createPaths();
        createAsteroids(5);
        //createShip();
        //canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new asteroids_1.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function shootLaser(_event) {
        const hotspot = new asteroids_1.Vector(_event.clientX - asteroids_1.crc2.canvas.offsetLeft, _event.clientY - asteroids_1.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new asteroids_1.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function update() {
        asteroids_1.crc2.fillRect(0, 0, asteroids_1.crc2.canvas.width, asteroids_1.crc2.canvas.height);
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
})(asteroids || (asteroids = {}));
//# sourceMappingURL=asteroidstask.js.map