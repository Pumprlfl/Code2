"use strict";
var Solar3d;
(function (Solar3d) {
    var f = FudgeCore;
    class Body extends f.Node {
        constructor(_name, _size, _distance, _vOrbit, /*_vRotation: number*/ _color) {
            super(_name);
            this.distance = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.vOrbit = _vOrbit;
            //this.vRotation = _vRotation;
            this.rotationNode = new f.Node(_name + "Rotation Node");
            this.rotationNode.addComponent(new f.ComponentTransform());
            this.rotationNode.addChild(this);
            const tempMat = new f.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);
            this.addComponent(new f.ComponentMesh(Body.mesh));
            this.addComponent(tempMat);
            this.addComponent(new f.ComponentTransform());
            this.mtxLocal.translateX(_distance);
        }
        setTransforms(_vOrbit, _vRotation, _distance) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }
        step() {
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);
            const c = this.getChild(0);
            if (c) {
                for (const bn of c.getChildren()) {
                    bn.step();
                }
            }
        }
    }
    Body.mesh = new f.MeshSphere("Body");
    Body.material = new f.Material("Body", f.ShaderLit);
    Solar3d.Body = Body;
})(Solar3d || (Solar3d = {}));
//# sourceMappingURL=Body.js.map