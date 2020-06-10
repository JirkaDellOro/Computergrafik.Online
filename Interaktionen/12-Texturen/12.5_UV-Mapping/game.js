///<reference path="babylon.d.ts" />
var UvMapping;
(function (UvMapping) {
    var Game = /** @class */ (function () {
        function Game(canvasElement) {
            // Create canvas and engine.
            this._canvas = document.getElementById(canvasElement);
            this._engine = new BABYLON.Engine(this._canvas, true);
        }
        Game.prototype.createScene = function () {
            // Create a basic BJS Scene object.
            this._scene = new BABYLON.Scene(this._engine);
            this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), this._scene);
            this._camera.setPosition(new BABYLON.Vector3(0, 0, -10));
            this._camera.attachControl(this._canvas, true);
            this._camera.setTarget(BABYLON.Vector3.Zero());
            // Create a basic light
            this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
            this._light = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(0, -2, 0), this._scene);
            // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
            var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, this._scene);
            var sphereMaterial = new BABYLON.StandardMaterial("texture1", this._scene);
            sphereMaterial.diffuseTexture = new BABYLON.Texture(this._picUrl, this._scene);
            // sphereMaterial.wireframe = true;
            sphere.material = sphereMaterial;
            // Move the sphere upward 1/2 of its height.
            sphere.position.y = 1;
            // Create a built-in "ground" shape.
            // let ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 6, height: 6, subdivisions: 2 }, this._scene);
            // let groundMaterial = new BABYLON.StandardMaterial("TextureGround", this._scene);
            // groundMaterial.diffuseTexture = new BABYLON.Texture("pic/grass.jpg", this._scene);
            // ground.material = groundMaterial;
        };
        Game.prototype.set = function (_url) {
            this._picUrl = _url;
        };
        Game.prototype.doRender = function () {
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
        return Game;
    }());
    UvMapping.Game = Game;
    window.addEventListener('DOMContentLoaded', handleLoad);
    var game;
    function handleLoad() {
        game = new Game('renderCanvas');
        main();
        // Create the scene.
        game.createScene();
        // Start render loop.
        game.doRender();
    }
    var stoneTexture;
    var colorTexture;
    var earthTexture;
    function main() {
        stoneTexture = document.getElementById("StoneTexture");
        colorTexture = document.getElementById("ColorTexture");
        earthTexture = document.getElementById("EarthTexture");
        texturePicker();
        stoneTexture.addEventListener("change", texturePicker);
        colorTexture.addEventListener("change", texturePicker);
        earthTexture.addEventListener("change", texturePicker);
    }
    function texturePicker() {
        if (stoneTexture.checked == true) {
            game.set("pic/pokeball.png");
            game.createScene();
        }
        if (colorTexture.checked == true) {
            game.set("pic/colorful.jpg");
            game.createScene();
        }
        if (earthTexture.checked == true)
            game.set("pic/earth.jpg");
        game.createScene();
    }
})(UvMapping || (UvMapping = {}));
