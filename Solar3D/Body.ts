namespace Solar3d {

    import f = FudgeCore;

    export class Body extends f.Node {
        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("Body", f.ShaderLit);

        //public position: f.Vector3;
        //public name: string;
        public rotationNode: f.Node;

        private size: number;
        private distance: number = 0;
        private vOrbit: number;
        private vRotation: number = 0;


        public constructor(_name: string, _size: number, _distance: number, _vOrbit: number, /*_vRotation: number*/ _color: string) {
            super(_name);
            this.name = _name;
            this.size = _size;
            this.vOrbit = _vOrbit;
            //this.vRotation = _vRotation;

            this.rotationNode = new f.Node(_name + "Rotation Node");
            this.rotationNode.addComponent(new f.ComponentTransform());
            this.rotationNode.addChild(this)

            const tempMat: f.ComponentMaterial = new f.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);

            this.addComponent(new f.ComponentMesh(Body.mesh));
            this.addComponent(tempMat);
            this.addComponent(new f.ComponentTransform());

            this.mtxLocal.translateX(_distance);
        }

        public setTransforms(_vOrbit: number, _vRotation: number, _distance: number): void {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }

        public step(): void {
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);

            const c: f.Node = this.getChild(0)
            if (c) {
                for (const bn of c.getChildren()) {
                    (bn as Body).step()
                }
            }

        }

    }
}