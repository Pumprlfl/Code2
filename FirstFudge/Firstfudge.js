"use strict";
var Firstfudge;
(function (Firstfudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", load);
    const floorNode = new f.Node("FloorNode");
    const node = new f.Node("Node");
    const viewport = new f.Viewport();
    //f.Loop.addEventListener(f.EVENT.LOOP_FRAME, move);
    function load() {
        const canvas = document.querySelector("canvas");
        const floor = new f.MeshQuad("Floor");
        const cmpfloorMesh = new f.ComponentMesh(floor);
        floorNode.addComponent(cmpfloorMesh);
        const floorMaterial = new f.Material("TextureFloor", f.ShaderLitTextured);
        const cmpfloorMaterial = new f.ComponentMaterial(floorMaterial);
        floorNode.addComponent(cmpfloorMaterial);
        floorNode.addComponent(new f.ComponentTransform);
        floorNode.getComponent(f.ComponentMesh).mtxPivot.rotateX(-90);
        floorNode.getComponent(f.ComponentMesh).mtxPivot.scaleX(50);
        floorNode.getComponent(f.ComponentMesh).mtxPivot.scaleY(50);
        floorNode.addChild(node);
        const cube = new f.MeshCube("Cube");
        const material = new f.Material("Texture", f.ShaderFlat);
        const lightcolor = new f.Color(1, 0, 0, 1);
        const light = new f.LightDirectional(lightcolor);
        //const node: f.Node = new f.Node("Node");
        const cmpmaterial = new f.ComponentMaterial(material);
        //cmpmaterial.clrPrimary.set(0, 1, 0, 1);//this way you can set the color of cmpmaterial
        node.addComponent(cmpmaterial);
        //or node.addComponent(new f.ComponentMaterial(material))
        node.addComponent(new f.ComponentMesh(cube));
        node.addComponent(new f.ComponentLight(light));
        node.addComponent(new f.ComponentTransform);
        node.getComponent(f.ComponentMesh).mtxPivot.scaleZ(4);
        node.getComponent(f.ComponentMesh).mtxPivot.translateY(0.5);
        node.getComponent(f.ComponentLight).mtxPivot.rotate(new f.Vector3(30, 180, 30));
        //node.getComponent(f.ComponentTransform).mtxLocal.translateX(1);
        //node.mtxLocal.translateX(1)
        //const bgclr: f.Color = new f.Color(0, 1, 1, 1);
        const camera = new f.ComponentCamera();
        camera.mtxPivot.translateZ(12);
        camera.mtxPivot.translateY(10);
        //camera.mtxPivot.rotateY(180);
        //camera.mtxPivot.rotateX(35);
        //camera.clrBackground = bgclr;
        //const viewport: f.Viewport = new f.Viewport();
        viewport.initialize("Viewport", floorNode, camera, canvas);
        //viewport.draw();
        //globalViewport = viewport;
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, move);
        f.Loop.start();
        f.Time.game.setScale();
    }
    //let pos: number = 0.01;
    function move() {
        const tSpeed = 3 / 1;
        const rSpeed = 360 / 1;
        const frameTimeinMilliseconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeinMilliseconds / 1000);
        //const degrees: number = 360 * frameTimeInSeconds;
        //node.mtxLocal.rotateY(degrees);
        //node.mtxLocal.translateX(pos, false);
        /*if (node.mtxLocal.translation.x > 2)

            pos = -pos;

        if (node.mtxLocal.translation.x < -2)

            pos = -pos;*/
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
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
        viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation, f.Vector3.Y());
        viewport.draw();
    }
})(Firstfudge || (Firstfudge = {}));
//# sourceMappingURL=Firstfudge.js.map