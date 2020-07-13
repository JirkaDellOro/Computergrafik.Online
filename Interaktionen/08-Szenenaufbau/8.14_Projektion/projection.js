///<reference path="babylon.d.ts" />
var Projection = /** @class */ (function () {
    function Projection(canvasElement) {
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Projection.prototype.createScene = function () {
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
        this._camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 2, 4.6, new BABYLON.Vector3(0, 0, 0), this._scene);
        this._camera.attachControl(this._canvas, false);
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        var light = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, -5, 0), this._scene);
        var sphere = BABYLON.Mesh.CreateBox('sphere1', 2, this._scene);
        this._light.intensity = 0.6;
        light.intensity = 0.6;
        var material = new BABYLON.StandardMaterial("abc", this._scene);
        material.diffuseTexture = new BABYLON.Texture("pic/text.jpg", this._scene);
        sphere.material = material;
        // sphere.rotation.y = 9;
        // this._roboter = BABYLON.SceneLoader.ImportMesh("body", "", "v_0_0_3_Roboter_szene.babylon");
        // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
    };
    Projection.prototype.paralelcamera = function () {
        var width = this._engine.getRenderWidth();
        var height = this._engine.getRenderHeight();
        var ratio = width / height;
        this._camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        this._camera.orthoLeft = ratio * -1.5;
        this._camera.orthoRight = ratio * 1.5;
        this._camera.orthoTop = 1.5;
        this._camera.orthoBottom = -1.5;
    };
    Projection.prototype.doRender = function () {
        var _this = this;
        // Run the render loop.
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // The canvas/window resize event handler.
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Projection;
}());
window.addEventListener('DOMContentLoaded', function () {
    // Create the game using the 'renderCanvas'.
    var projection = new Projection('renderCanvas');
    var paraProjection = new Projection('renderCanvasPara');
    // Create the scene.
    projection.createScene();
    paraProjection.createScene();
    paraProjection.paralelcamera();
    // Start render loop.
    projection.doRender();
    paraProjection.doRender();
});
