///<reference path="babylon.d.ts" />
var Transformations;
(function (Transformations) {
    // let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");
    var Interaction = /** @class */ (function () {
        function Interaction(canvasElement) {
            // Create canvas and engine.
            this._canvas = document.getElementById(canvasElement);
            this._engine = new BABYLON.Engine(this._canvas, true);
        }
        Interaction.prototype.createScene = function () {
            // Create a basic BJS Scene object.
            this._scene = new BABYLON.Scene(this._engine);
            // Create and position a arc rotate camera.
            this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), this._scene);
            this._camera.wheelPrecision = 100;
            this._camera.attachControl(this._canvas, false);
            this._camera.setPosition(new BABYLON.Vector3(10, 0, 0));
            this._camera.setTarget(BABYLON.Vector3.Zero());
            this._ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(0, 1, 1), this._scene);
            this._cube = BABYLON.MeshBuilder.CreateBox("cube", {}, this._scene);
            var material = new BABYLON.StandardMaterial("cubeMaterial", this._scene);
            material.diffuseTexture = new BABYLON.Texture("./texture2.jpg", this._scene);
            this._cube.material = material;
        };
        Interaction.prototype.doRender = function () {
            var _this = this;
            // Run the render loop.
            this._engine.runRenderLoop(function () {
                _this._scene.render();
                _this._scene.unfreezeMaterials();
            });
            // The canvas/window resize event handler.
            window.addEventListener('resize', function () {
                _this._engine.resize();
            });
        };
        Interaction.prototype.setRotationX = function (_xValue) {
            this._cube.rotation.x = _xValue;
        };
        Interaction.prototype.setRotationY = function (_yValue) {
            this._cube.rotation.y = _yValue;
        };
        Interaction.prototype.setRotationZ = function (_zValue) {
            this._cube.rotation.z = _zValue;
        };
        Interaction.prototype.setScalingX = function (_xValue) {
            this._cube.scaling.x = _xValue;
        };
        Interaction.prototype.setScalingY = function (_yValue) {
            this._cube.scaling.y = _yValue;
        };
        Interaction.prototype.setScalingZ = function (_zValue) {
            this._cube.scaling.z = _zValue;
        };
        Interaction.prototype.setPositionX = function (_xValue) {
            this._cube.position.x = _xValue;
        };
        Interaction.prototype.setPositionY = function (_yValue) {
            this._cube.position.y = _yValue;
        };
        Interaction.prototype.setPositionZ = function (_zValue) {
            this._cube.position.z = _zValue;
        };
        return Interaction;
    }());
    var transformationButtons;
    var inputRotateCubeXAxis;
    var inputRotateCubeYAxis;
    var inputRotateCubeZAxis;
    var inputScalingCubeXAxis;
    var inputScalingCubeYAxis;
    var inputScalingCubeZAxis;
    var inputTranslationCubeXAxis;
    var inputTranslationCubeYAxis;
    var inputTranslationCubeZAxis;
    function main() {
        // Adding event listener to rotation input
        inputRotateCubeXAxis = document.getElementById("x-axis-rotate");
        inputRotateCubeXAxis.addEventListener("input", rotateCube);
        inputRotateCubeYAxis = document.getElementById("y-axis-rotate");
        inputRotateCubeYAxis.addEventListener("input", rotateCube);
        inputRotateCubeZAxis = document.getElementById("z-axis-rotate");
        inputRotateCubeZAxis.addEventListener("input", rotateCube);
        // Adding event listener to scaling inputs
        inputScalingCubeXAxis = document.getElementById("x-axis-scaling");
        inputScalingCubeXAxis.addEventListener("input", scaleCube);
        inputScalingCubeYAxis = document.getElementById("y-axis-scaling");
        inputScalingCubeYAxis.addEventListener("input", scaleCube);
        inputScalingCubeZAxis = document.getElementById("z-axis-scaling");
        inputScalingCubeZAxis.addEventListener("input", scaleCube);
        // Adding event listener to translation inputs
        inputTranslationCubeXAxis = document.getElementById("x-axis-translation");
        inputTranslationCubeXAxis.addEventListener("input", translatCube);
        inputTranslationCubeYAxis = document.getElementById("y-axis-translation");
        inputTranslationCubeYAxis.addEventListener("input", translatCube);
        inputTranslationCubeZAxis = document.getElementById("z-axis-translation");
        inputTranslationCubeZAxis.addEventListener("input", translatCube);
        disableGroups();
        transformationButtons = document.querySelectorAll(".btn");
        for (var i = 0; i < transformationButtons.length; i++) {
            transformationButtons[i].addEventListener('click', displayInputFields);
        }
    }
    window.addEventListener('DOMContentLoaded', handleLoad);
    var scene;
    function handleLoad() {
        scene = new Interaction('renderCanvas');
        main();
        // Create the scene.
        scene.createScene();
        // Start render loop.
        scene.doRender();
    }
    function disableGroups() {
        var transformGroup = document.getElementsByClassName("transform-group");
        for (var i = 0; i < transformGroup.length; i++) {
            transformGroup[i].style.display = 'none';
        }
    }
    function displayInputFields() {
        disableGroups();
        var group = this.getAttribute("data-group");
        document.getElementById(group).style.display = 'block';
    }
    function rotateCube() {
        var xAxis;
        var yAxis;
        var zAxis;
        xAxis = document.getElementById('x-axis-rotate').value;
        yAxis = document.getElementById('y-axis-rotate').value;
        zAxis = document.getElementById('z-axis-rotate').value;
        scene.setRotationX(xAxis / 10);
        scene.setRotationY(yAxis / 10);
        scene.setRotationZ(zAxis / 10);
    }
    function scaleCube() {
        var xAxis;
        var yAxis;
        var zAxis;
        xAxis = document.getElementById('x-axis-scaling').value;
        yAxis = document.getElementById('y-axis-scaling').value;
        zAxis = document.getElementById('z-axis-scaling').value;
        scene.setScalingX(xAxis / 10);
        scene.setScalingY(yAxis / 10);
        scene.setScalingZ(zAxis / 10);
    }
    function translatCube() {
        var xAxis;
        var yAxis;
        var zAxis;
        xAxis = document.getElementById('x-axis-translation').value;
        yAxis = document.getElementById('y-axis-translation').value;
        zAxis = document.getElementById('z-axis-translation').value;
        scene.setPositionX(xAxis / 10);
        scene.setPositionY(yAxis / 10);
        scene.setPositionZ(zAxis / 10);
    }
})(Transformations || (Transformations = {}));
