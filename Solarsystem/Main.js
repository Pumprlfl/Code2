"use strict";
var Body;
(function (Body) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Body.crc2 = canvas.getContext("2d");
        //crc2.fillStyle = "black";
        //crc2.strokeStyle = "white";
        Body.crc2.fillRect(0, 0, Body.crc2.canvas.width, Body.crc2.canvas.width);
        createBody();
        window.setInterval(update, 20);
    }
    const orbit0 = [];
    const orbit1 = [];
    const orbit2 = [];
    const orbit3 = [];
    function createBody() {
        console.log("budy");
        const sun = new Body.Body("Sun", 80, 0, 0, "yellow", orbit1);
        const earth = new Body.Body("Earth", 20, 15, 70, "blue", orbit2);
        const moonearth = new Body.Body("Earthmoon", 5, 30, 25, "blue", orbit3);
        orbit0.push(sun);
        orbit1.push(earth);
        orbit2.push(moonearth);
    }
    function update() {
        console.log("update");
        Body.crc2.clearRect(0, 0, Body.crc2.canvas.width, Body.crc2.canvas.height);
        Body.crc2.fillRect(0, 0, Body.crc2.canvas.width, Body.crc2.canvas.height);
        for (const earth of orbit1) {
            console.log(earth);
            earth.draw(1 / 50);
            //earth.draw(1 / 50);
            //moonearth.draw(1 / 50);
        }
    }
})(Body || (Body = {}));
//# sourceMappingURL=Main.js.map