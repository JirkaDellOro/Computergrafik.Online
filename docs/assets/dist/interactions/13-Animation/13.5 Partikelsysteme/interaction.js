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
            var _this = this;
            // Create a basic BJS Scene object.
            this._scene = new BABYLON.Scene(this._engine);
            // Create and position a arc rotate camera.
            this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), this._scene);
            this._camera.setPosition(new BABYLON.Vector3(30, 0, 30));
            this._camera.attachControl(this._canvas, false);
            this._camera.setTarget(BABYLON.Vector3.Zero());
            this._camera.wheelPrecision = 100;
            this._fountain = BABYLON.Mesh.CreateBox("fontain", 0.1, this._scene);
            this._fountain.visibility = 0.1;
            this._particleSystem = new BABYLON.ParticleSystem("particles", 3000, this._scene);
            this._customEmitter = new BABYLON.CustomParticleEmitter();
            this._points = [[-4, 5],
                [-2, -6],
                [6, 0.5] // C//
            ];
            this._customEmitter.particlePositionGenerator = function (index, particle, out) {
                var r1 = Math.random();
                var r2 = Math.random();
                var s1 = Math.sqrt(r1);
                var x = _this._points[0][0] * (1.0 - s1) + _this._points[1][0] * (1.0 - r2) * s1 + _this._points[2][0] * r2 * s1;
                var y = _this._points[0][1] * (1.0 - s1) + _this._points[1][1] * (1.0 - r2) * s1 + _this._points[2][1] * r2 * s1;
                out.x = x;
                out.y = y;
                out.z = Math.random() * 5;
            };
            this._customEmitter.particleDestinationGenerator = function (index, particle, out) {
                var r1 = Math.random();
                var r2 = Math.random();
                var s1 = Math.sqrt(r1);
                var x = _this._points[0][0] * (1.0 - s1) + _this._points[1][0] * (1.0 - r2) * s1 + _this._points[2][0] * r2 * s1;
                var y = _this._points[0][1] * (1.0 - s1) + _this._points[1][1] * (1.0 - r2) * s1 + _this._points[2][1] * r2 * s1;
                out.x = x;
                out.y = y;
                out.z = Math.random() * 5;
            };
            this._particleSystem.particleTexture = new BABYLON.Texture("./textures/smoke2.png", this._scene);
            this._particleSystem.minSize = 0.05;
            this._particleSystem.maxSize = 0.1;
            this._particleSystem.emitRate = 1000;
            this._particleSystem.particleEmitterType = this._customEmitter;
            this._particleSystem.emitter = this._fountain;
            this._particleSystem.start();
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
        Interaction.prototype.setEmitRate = function (_emitRate) {
            this._particleSystem.emitRate = _emitRate;
        };
        Interaction.prototype.setLifeTime = function (_lifeTime) {
            this._particleSystem.maxLifeTime = _lifeTime;
        };
        Interaction.prototype.setMinSize = function (_minSize) {
            this._particleSystem.minSize = _minSize;
        };
        Interaction.prototype.setMaxSize = function (_maxSize) {
            this._particleSystem.maxSize = _maxSize;
        };
        return Interaction;
    }());
    var inputParticleLifeTime;
    var inputEmitRate;
    var minSize;
    var maxSize;
    function main() {
        inputParticleLifeTime = document.getElementById("particles-lifetime");
        inputParticleLifeTime.addEventListener('input', setParticleLifeTime);
        inputEmitRate = document.getElementById("particles-emit-rate");
        inputEmitRate.addEventListener('input', setParticleEmitRate);
        minSize = document.getElementById("min-size");
        minSize.addEventListener('input', setParticleMinRate);
        maxSize = document.getElementById("max-size");
        maxSize.addEventListener('input', setParticleMaxRate);
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
    function setParticleLifeTime() {
        scene.setLifeTime(this.value / 30);
    }
    function setParticleEmitRate() {
        scene.setEmitRate(this.value * 30);
    }
    function setParticleMinRate() {
        scene.setMinSize(this.value / 200);
    }
    function setParticleMaxRate() {
        scene.setMaxSize(this.value / 200);
    }
})(Transformations || (Transformations = {}));
