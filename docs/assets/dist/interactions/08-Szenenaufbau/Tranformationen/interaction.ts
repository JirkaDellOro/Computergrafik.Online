///<reference path="babylon.d.ts" />

namespace Transformations {
    // let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");

    class Interaction {
        _scene: BABYLON.Scene;
        private _canvas: HTMLCanvasElement;
        private _engine: BABYLON.Engine;
        private _camera: BABYLON.ArcRotateCamera;

        private _ambientLight: BABYLON.HemisphericLight;
        private _cube : BABYLON.Mesh;

        constructor(canvasElement: string) {
            // Create canvas and engine.
            this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
            this._engine = new BABYLON.Engine(this._canvas, true);
        }

        createScene(): void {
            // Create a basic BJS Scene object.
            this._scene = new BABYLON.Scene(this._engine);
            // Create and position a arc rotate camera.
            this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), this._scene);
            this._camera.wheelPrecision = 100;
            this._camera.attachControl(this._canvas, false);
            this._camera.setPosition(new BABYLON.Vector3(10,  0, 0));
            this._camera.setTarget(BABYLON.Vector3.Zero());

            this._ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(0, 1, 1   ), this._scene);
            this._cube = BABYLON.MeshBuilder.CreateBox("cube", {}, this._scene);

            let material: any = new BABYLON.StandardMaterial("cubeMaterial", this._scene);
            material.diffuseTexture = new BABYLON.Texture("./texture2.jpg", this._scene);
            this._cube.material = material;

        }

        doRender(): void {
            // Run the render loop.
            this._engine.runRenderLoop(() => {
                this._scene.render();
                this._scene.unfreezeMaterials();
            });

            // The canvas/window resize event handler.
            window.addEventListener('resize', () => {
                this._engine.resize();
            });
        }

        setRotationX(_xValue: number) {
            this._cube.rotation.x = _xValue;
        }

        setRotationY(_yValue: number) {
            this._cube.rotation.y = _yValue;
        }

        setRotationZ(_zValue: number) {
            this._cube.rotation.z = _zValue;
        }

        setScalingX(_xValue: number) {
            this._cube.scaling.x = _xValue;
        }

        setScalingY(_yValue: number) {
            this._cube.scaling.y = _yValue;
        }

        setScalingZ(_zValue: number) {
            this._cube.scaling.z = _zValue;
        }

        setPositionX(_xValue: number) {
            this._cube.position.x = _xValue;
        }

        setPositionY(_yValue: number) {
            this._cube.position.y = _yValue;
        }

        setPositionZ(_zValue: number) {
            this._cube.position.z = _zValue;
        }


    }

    let transformationButtons: NodeListOf<HTMLButtonElement>;

    let inputRotateCubeXAxis: HTMLInputElement;
    let inputRotateCubeYAxis: HTMLInputElement;
    let inputRotateCubeZAxis: HTMLInputElement;

    let inputScalingCubeXAxis: HTMLInputElement;
    let inputScalingCubeYAxis: HTMLInputElement;
    let inputScalingCubeZAxis: HTMLInputElement;

    let inputTranslationCubeXAxis: HTMLInputElement;
    let inputTranslationCubeYAxis: HTMLInputElement;
    let inputTranslationCubeZAxis: HTMLInputElement;

    function main(): void {
        // Adding event listener to rotation input
        inputRotateCubeXAxis = <HTMLInputElement>document.getElementById("x-axis-rotate");
        inputRotateCubeXAxis.addEventListener("input", rotateCube);

        inputRotateCubeYAxis = <HTMLInputElement>document.getElementById("y-axis-rotate");
        inputRotateCubeYAxis.addEventListener("input", rotateCube);

        inputRotateCubeZAxis = <HTMLInputElement>document.getElementById("z-axis-rotate");
        inputRotateCubeZAxis.addEventListener("input", rotateCube);

        // Adding event listener to scaling inputs
        inputScalingCubeXAxis = <HTMLInputElement>document.getElementById("x-axis-scaling");
        inputScalingCubeXAxis.addEventListener("input", scaleCube);

        inputScalingCubeYAxis = <HTMLInputElement>document.getElementById("y-axis-scaling");
        inputScalingCubeYAxis.addEventListener("input", scaleCube);

        inputScalingCubeZAxis = <HTMLInputElement>document.getElementById("z-axis-scaling");
        inputScalingCubeZAxis.addEventListener("input", scaleCube);

        // Adding event listener to translation inputs
        inputTranslationCubeXAxis = <HTMLInputElement>document.getElementById("x-axis-translation");
        inputTranslationCubeXAxis.addEventListener("input", translatCube);

        inputTranslationCubeYAxis = <HTMLInputElement>document.getElementById("y-axis-translation");
        inputTranslationCubeYAxis.addEventListener("input", translatCube);

        inputTranslationCubeZAxis = <HTMLInputElement>document.getElementById("z-axis-translation");
        inputTranslationCubeZAxis.addEventListener("input", translatCube);

        disableGroups();
        transformationButtons = document.querySelectorAll(".btn");
        for(let i = 0; i < transformationButtons.length; i++) {
            transformationButtons[i].addEventListener('click', displayInputFields)
        }
    }

    window.addEventListener('DOMContentLoaded', handleLoad);
    let scene: Interaction;
    function handleLoad(): void {
        scene = new Interaction('renderCanvas');
        main();
        // Create the scene.
        scene.createScene();
        // Start render loop.
        scene.doRender();
    }

    function disableGroups() {
        let transformGroup = document.getElementsByClassName("transform-group");
        for(let i = 0; i < transformGroup.length; i ++) {
            transformGroup[i].style.display = 'none';
        }
    }

    function displayInputFields() {
        disableGroups();
        let group = this.getAttribute("data-group");
        document.getElementById(group).style.display = 'block'
    }

    function rotateCube() {
        let xAxis : number;
        let yAxis : number;
        let zAxis : number;
        xAxis = document.getElementById('x-axis-rotate').value;
        yAxis = document.getElementById('y-axis-rotate').value;
        zAxis = document.getElementById('z-axis-rotate').value;
        scene.setRotationX(xAxis/10);
        scene.setRotationY(yAxis/10);
        scene.setRotationZ(zAxis/10);
    }

    function scaleCube() {
        let xAxis : number;
        let yAxis : number;
        let zAxis : number;
        xAxis = document.getElementById('x-axis-scaling').value;
        yAxis = document.getElementById('y-axis-scaling').value;
        zAxis = document.getElementById('z-axis-scaling').value;
        scene.setScalingX(xAxis/10);
        scene.setScalingY(yAxis/10);
        scene.setScalingZ(zAxis/10);
    }

    function translatCube() {
        let xAxis : number;
        let yAxis : number;
        let zAxis : number;
        xAxis = document.getElementById('x-axis-translation').value;
        yAxis = document.getElementById('y-axis-translation').value;
        zAxis = document.getElementById('z-axis-translation').value;
        scene.setPositionX(xAxis/10);
        scene.setPositionY(yAxis/10);
        scene.setPositionZ(zAxis/10);
    }
}
