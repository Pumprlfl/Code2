"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SolarSystem;
(function (SolarSystem) {
    window.addEventListener("load", load);
    let sun;
    let speedSlider;
    let rotationSpeed = 1; //set initial rotation speed
    function load() {
        return __awaiter(this, void 0, void 0, function* () {
            const canvas = document.querySelector("canvas");
            speedSlider = document.getElementById("speedSlider");
            speedSlider.addEventListener("input", hndSliderInput);
            canvas.addEventListener("click", hndMouseInput);
            SolarSystem.crc2 = canvas.getContext("2d");
            SolarSystem.crc2.translate(canvas.width / 2, canvas.height / 2); //translate coordinate system center to center of canvas
            const response = yield fetch("Data.json");
            const data = yield response.json();
            sun = createBody(data);
            requestAnimationFrame(animate);
        });
    }
    function hndSliderInput() {
        const value = Number(speedSlider.value) / 5; //divide slider value (0-100) for smoother input
        rotationSpeed = value;
    }
    function hndMouseInput(_event) {
        const mouseX = _event.clientX;
        const mouseY = _event.clientY;
        sun.showInfo(mouseX, mouseY);
    }
    function animate() {
        SolarSystem.crc2.clearRect(-SolarSystem.crc2.canvas.width / 2, -SolarSystem.crc2.canvas.height / 2, SolarSystem.crc2.canvas.width, SolarSystem.crc2.canvas.height);
        SolarSystem.crc2.fillStyle = "black";
        SolarSystem.crc2.fillRect(-SolarSystem.crc2.canvas.width / 2, -SolarSystem.crc2.canvas.height / 2, SolarSystem.crc2.canvas.width, SolarSystem.crc2.canvas.height);
        sun.update(rotationSpeed);
        requestAnimationFrame(animate);
    }
    function createBody(_data) {
        const body = new SolarSystem.Body(_data);
        for (const child of _data.children) {
            body.addChild(createBody(child));
        }
        return body;
    }
    /*let Planets: Body[] = []; //create arrays for bodies (planets and moons)

    // let MercuryMoons: Body[] = [];
    // let VenusMoons: Body[] = [];
    let EarthMoons: Body[] = [];
    let MarsMoons: Body[] = [];
    let JupiterMoons: Body[] = [];
    let SaturnMoons: Body[] = [];
    let UranusMoons: Body[] = [];
    let NeptuneMoons: Body[] = [];

    let Empty: Body[] = [];

    let sun: Body = new Body("Sun", "yellow", 30, 0, 0, Planets); //create all bodies (sun, planets and moons) and push them in their respective arrays

    let mercury: Body = new Body("Mercury", "gainsboro", 3, 0.26, 55, Empty);
    Planets.push(mercury);
    let venus: Body = new Body("Venus", "moccasin", 8, 0.23, 80, Empty);
    Planets.push(venus);
    let earth: Body = new Body("Earth", "dodgerblue", 8, 0.15, 112, EarthMoons);
    Planets.push(earth);
    let mars: Body = new Body("Mars", "saddlebrown", 5, 0.25, 145, MarsMoons);
    Planets.push(mars);
    let jupiter: Body = new Body("Jupiter", "sienna", 20, 0.13, 195, JupiterMoons);
    Planets.push(jupiter);
    let saturn: Body = new Body("Saturn", "wheat", 18, 0.14, 262, SaturnMoons);
    Planets.push(saturn);
    let uranus: Body = new Body("Uranus", "paleturquoise", 12, 0.17, 320, UranusMoons);
    Planets.push(uranus);
    let neptune: Body = new Body("Neptune", "steelblue", 12, 0.13, 370, NeptuneMoons);
    Planets.push(neptune);

    let earthMoon: Body = new Body("Günni", "grey", 2, 0.3, 12, Empty);
    EarthMoons.push(earthMoon);

    let marsMoon1: Body = new Body("Phobos", "grey", 2, 0.2, 8, Empty);
    MarsMoons.push(marsMoon1);
    let marsMoon2: Body = new Body("Deimos", "grey", 2, 0.4, 11, Empty);
    MarsMoons.push(marsMoon2);

    let jupiterMoon1: Body = new Body("Io", "grey", 2, 0.4, 25, Empty);
    JupiterMoons.push(jupiterMoon1);
    let jupiterMoon2: Body = new Body("Europa", "grey", 2, 0.15, 26, Empty);
    JupiterMoons.push(jupiterMoon2);
    let jupiterMoon3: Body = new Body("Ganymed", "grey", 2, 0.3, 28, Empty);
    JupiterMoons.push(jupiterMoon3);
    let jupiterMoon4: Body = new Body("Kallisto", "grey", 2, 0.1, 32, Empty);
    JupiterMoons.push(jupiterMoon4);

    let saturnMoon1: Body = new Body("Mimas", "grey", 2, 0.1, 23, Empty);
    SaturnMoons.push(saturnMoon1);
    let saturnMoon2: Body = new Body("Enceladus", "grey", 2, 0.5, 23, Empty);
    SaturnMoons.push(saturnMoon2);
    let saturnMoon3: Body = new Body("Tethys", "grey", 2, 0.3, 24, Empty);
    SaturnMoons.push(saturnMoon3);
    let saturnMoon4: Body = new Body("Dione", "grey", 2, 0.2, 24, Empty);
    SaturnMoons.push(saturnMoon4);
    let saturnMoon5: Body = new Body("Rhea", "grey", 2, 0.4, 25, Empty);
    SaturnMoons.push(saturnMoon5);
    let saturnMoon6: Body = new Body("Titan", "grey", 2, 0.15, 26, Empty);
    SaturnMoons.push(saturnMoon6);
    let saturnMoon7: Body = new Body("Hyperion", "grey", 2, 0.25, 27, Empty);
    SaturnMoons.push(saturnMoon7);
    let saturnMoon8: Body = new Body("Iapetus", "grey", 2, 0.35, 28, Empty);
    SaturnMoons.push(saturnMoon8);

    let uranusMoon1: Body = new Body("Miranda", "grey", 2, 0.4, 16, Empty);
    UranusMoons.push(uranusMoon1);
    let uranusMoon2: Body = new Body("Ariel", "grey", 2, 0.5, 16, Empty);
    UranusMoons.push(uranusMoon2);
    let uranusMoon3: Body = new Body("Umbriel", "grey", 2, 0.3, 17, Empty);
    UranusMoons.push(uranusMoon3);
    let uranusMoon4: Body = new Body("Titania", "grey", 2, 0.2, 18, Empty);
    UranusMoons.push(uranusMoon4);
    let uranusMoon5: Body = new Body("Oberon", "grey", 2, 0.35, 20, Empty);
    UranusMoons.push(uranusMoon5);

    let neptuneMoon: Body = new Body("Triton", "grey", 2, 0.3, 17, Empty);
    NeptuneMoons.push(neptuneMoon);*/
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Main.js.map