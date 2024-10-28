"use strict";
var asteroids;
(function (asteroids) {
    class Asteroid {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new asteroids.Vector(0, 0);
            this.position = new asteroids.Vector(0, 0);
            this.velocity = new asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new asteroids.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += asteroids.crc2.canvas.height;
            if (this.position.x > asteroids.crc2.canvas.width)
                this.position.x -= asteroids.crc2.canvas.width;
            if (this.position.y > asteroids.crc2.canvas.height)
                this.position.y -= asteroids.crc2.canvas.height;
        }
        draw() {
            asteroids.crc2.save();
            asteroids.crc2.translate(this.position.x, this.position.y);
            asteroids.crc2.scale(this.size, this.size);
            asteroids.crc2.translate(-50, -50);
            asteroids.crc2.stroke(asteroids.asteroidPaths[this.type]);
            asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    asteroids.Asteroid = Asteroid;
})(asteroids || (asteroids = {}));
//# sourceMappingURL=asteroid.js.map