///<reference path="babylon.d.ts" />

namespace Transformations {
    // let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");

    class Interaction {
        _scene: BABYLON.Scene;
        private _canvas: HTMLCanvasElement;
        private _engine: BABYLON.Engine;
        private _camera: BABYLON.ArcRotateCamera;

        private _ambientLight: BABYLON.HemisphericLight;
        private _cube: BABYLON.Mesh;
        private _initialPos: BABYLON.Vector3;
        private _animationBoxScaling: BABYLON.Animation;
        private _animationBoxTranslation: BABYLON.Animation;
        private _animationBoxRotation: BABYLON.Animation;
        private _animationKeys: [{frame:number; value:BABYLON.Vector3;}];
        private _animationKeysTranslation: [{frame:number; value:number}];
        private _animationKeysRotation: [{frame:number; value:BABYLON.Vector3}];

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
            this._camera.setPosition(new BABYLON.Vector3(10, 10, 0));
            this._camera.attachControl(this._canvas, false);
            this._camera.setTarget(BABYLON.Vector3.Zero());

            this._ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(0, 1, 0), this._scene);
            this._cube = BABYLON.MeshBuilder.CreateBox("cube", {}, this._scene)
            this._initialPos = this._cube.position;
            let material: any = new BABYLON.StandardMaterial("cubeMaterial", this._scene);
            material.diffuseTexture = new BABYLON.Texture("./texture.jpg", this._scene);
            this._cube.material = material;
            this._animationBoxScaling = new BABYLON.Animation("boxAnimationScaling", "scaling", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            this._animationBoxRotation = new BABYLON.Animation("boxRotationScaling", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            this._animationBoxTranslation = new BABYLON.Animation("boxAnimationTranslationX", "position.x", 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            this._animationKeys = [{frame:0, value: new BABYLON.Vector3(1,1,1)}];
            this._animationKeysRotation = [{frame:0, value: new BABYLON.Vector3(0,0,0)}];
            this._animationKeysTranslation = [{frame:0, value:0}];
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

        getRotation() {
            return this._cube.rotation;
        }

        setRotationY(_yValue: number) {
            this._cube.rotation.y = _yValue;
        }

        setRotationZ(_zValue: number) {
            this._cube.rotation.z = _zValue;
        }

        getScaling(){
            return this._cube.scaling;
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
        getPosition() {
            return this._cube.position;
        }
        startAnimation() {
            this._animationBoxScaling.setKeys(this._animationKeys);
            this._animationBoxTranslation.setKeys(this._animationKeysTranslation);
            this._animationBoxRotation.setKeys(this._animationKeysRotation);
            this._cube.animations.push(this._animationBoxScaling);
            this._cube.animations.push(this._animationBoxTranslation);
            this._cube.animations.push(this._animationBoxRotation);
            this._cube.position = new BABYLON.Vector3(0, 0, 0);
            this._cube.scaling = new BABYLON.Vector3(1, 1, 1);
            this._cube.rotation = new BABYLON.Vector3(0, 0,0);
            this._scene.beginAnimation(this._cube, 0, 1000, false);
        }
        setKeyFrame(_frame: number, _value:BABYLON.Vector3) {
            this._animationKeys.push({
                frame: _frame,
                value: _value
            })
            console.log(this._animationKeys)
        }

        setKeyFrameTranslation(_frame: number, _value: number) {
            this._animationKeysTranslation.push({
                frame: _frame,
                value: _value
            })
        }

        setKeyFramesRotation(_frame: number, _value:BABYLON.Vector3) {
            this._animationKeysRotation.push({
                frame: _frame,
                value: _value
            })
            console.log(this._animationKeysRotation)
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

    let buttonSetKeyframe: HTMLButtonElement;
    let buttonStartAnimation: HTMLButtonElement;


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

        buttonSetKeyframe = <HTMLButtonElement>document.getElementById("set-kf");
        buttonSetKeyframe.addEventListener('click', setKeyFrame);

        buttonStartAnimation = <HTMLButtonElement>document.getElementById("start-animation");
        buttonStartAnimation.addEventListener('click', startAnimation);

        disableGroups();
        transformationButtons = document.querySelectorAll(".btn");
        for(let i = 0; i < transformationButtons.length-2; i++) {
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

    function setButtonsToInactive() {
        let buttons = document.getElementsByClassName("btn");
        for(let i = 0; i < buttons.length; i ++) {
            buttons[i].classList.remove('active');
        }
    }

    function displayInputFields() {
        disableGroups();
        setButtonsToInactive();
        let group = this.getAttribute("data-group");
        document.getElementById(group).style.display = 'block';
        this.classList.add('active');
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
        console.log(scene.getScaling());
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

    function setKeyFrame(){
        let keyframe : number;
        let group : string;
        let x;
        let y;
        let z;

        let buttons = document.getElementsByClassName('active');
        for (let i = 0; i < buttons.length; i++) {
            group = buttons[i].getAttribute('data-group')
            console.log(group)
        }
        let inputs = document.getElementById(group).getElementsByClassName('custom-range');
        console.log(inputs)
        for(let i = 0; i < inputs.length; i++) {
            let input = inputs[i].getAttribute('axis');
            console.log(input)
            switch (input) {
                case 'x': {
                    x = inputs[i].value/10;
                    break;
                }
                case 'y': {
                    y = inputs[i].value/10;
                    break;
                }
                case 'z': {
                    z = inputs[i].value/10;
                    break;
                }
            }
        }
        keyframe = document.getElementById('keyframe').value;
        if(group === 'translation-group') {
            scene.setKeyFrameTranslation(keyframe, x);
        }
        if(group === 'scaling-group') {
            scene.setKeyFrame(keyframe, new BABYLON.Vector3(x, y, z));
        }
        console.log(group)
        if(group === 'rotate-group') {
            scene.setKeyFramesRotation(keyframe, new BABYLON.Vector3(x, y, z));
        }
    }

    function startAnimation() {
        scene.startAnimation();
    }
}
