"use strict";
var Body;
(function (Body_1) {
    class Body {
        constructor(_name, _size, _velocity, _orbitradius, _color, _children) {
            this.name = _name;
            this.size = _size;
            this.velocity = _velocity;
            this.orbitradius = _orbitradius;
            this.color = _color;
            this.children = _children;
        }
        draw(_timeslice, _sunposx) {
            Body_1.crc2.save();
            Body_1.crc2.beginPath();
            Body_1.crc2.rotate(this.velocity);
            Body_1.crc2.translate(this.orbitradius, 0);
            Body_1.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            Body_1.crc2.fillStyle = this.color;
            Body_1.crc2.closePath();
            Body_1.crc2.restore();
        }
    }
    Body_1.Body = Body;
})(Body || (Body = {}));
//# sourceMappingURL=Body.js.map