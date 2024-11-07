"use strict";
var Solar3d;
(function (Solar3d) {
    var f = FudgeCore;
    window.addEventListener("load", load);
    let sun;
    let viewport;
    function load() {
        sun = new Solar3d.Body("Sun", 1, 0, 0, "yellow");
        const earth = new Solar3d.Body("Earth", 1, 2, 1, "blue");
        const moon = new Solar3d.Body("Moon", 1, 1, 1, "grey");
        sun.addChild(earth.rotationNode);
        earth.addChild(moon.rotationNode);
        const canvas = document.querySelector("canvas");
        const camera = new f.ComponentCamera();
        //camera.mtxPivot.translateZ(12);
        camera.mtxPivot.translateZ(10);
        camera.mtxPivot.rotateY(180);
        viewport = new f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, move);
        f.Loop.start();
    }
    //let pos: number = 0.01;
    function move() {
        sun.step();
        //(sun.getChild(0).getChild(0) as Body).step();
        // const tSpeed: number = 3 / 1;
        // const rSpeed: number = 360 / 1;
        // const frameTimeinMilliseconds: number = f.Loop.timeFrameGame;
        // const frameTimeInSeconds: number = (frameTimeinMilliseconds / 1000);
        //const degrees: number = 360 * frameTimeInSeconds;
        //node.mtxLocal.rotateY(degrees);
        //node.mtxLocal.translateX(pos, false);
        /*if (node.mtxLocal.translation.x > 2)

            pos = -pos;

        if (node.mtxLocal.translation.x < -2)

            pos = -pos;*/
        /*if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            node.mtxLocal.translateX(tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            node.mtxLocal.translateX(-tSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.E]))
            node.mtxLocal.rotateY(rSpeed * frameTimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.Q]))
            node.mtxLocal.rotateY(-rSpeed * frameTimeInSeconds);

        const up: f.Vector3 = f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation, f.Vector3.Y());
        f.Recycler.store(up);*/
        viewport.draw();
    }
})(Solar3d || (Solar3d = {}));
//# sourceMappingURL=Solar3d.js.map