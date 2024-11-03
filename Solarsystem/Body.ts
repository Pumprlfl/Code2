namespace Body {
    export class Body {
        name: string;
        size: number;
        velocity: number;
        orbitradius: number;
        sunpos: number;
        color: string;
        children: Body[];

        constructor(_name: string, _size: number, _velocity: number, _orbitradius: number, _color: string, _children: Body[]) {
            this.name = _name;
            this.size = _size;
            this.velocity = _velocity;
            this.orbitradius = _orbitradius;
            this.color = _color;
            this.children = _children
        }

        draw(_timeslice: number, _sunposx?: number,): void {
            crc2.save();
            crc2.beginPath();
            crc2.rotate(this.velocity);
            crc2.translate(this.orbitradius, 0);
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.restore();
        }

    }
}