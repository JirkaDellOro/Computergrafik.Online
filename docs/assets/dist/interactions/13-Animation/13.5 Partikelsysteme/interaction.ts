///<reference path="babylon.d.ts" />

namespace Transformations {
    // let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");

    class Interaction {
        _scene: BABYLON.Scene;
        private _canvas: HTMLCanvasElement;
        private _engine: BABYLON.Engine;
        private _camera: BABYLON.ArcRotateCamera;
        private _particleSystem : BABYLON.ParticleSystem;
        private _customEmitter : BABYLON.CustomParticleEmitter;
        private _fountain : BABYLON.Mesh;
        private _points : [number[], number[], number[]];

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
            this._camera.setPosition(new BABYLON.Vector3(30, 0, 30));
            this._camera.attachControl(this._canvas, false);
            this._camera.setTarget(BABYLON.Vector3.Zero());
            this._camera.wheelPrecision = 100;

            this._fountain = BABYLON.Mesh.CreateBox("fontain", 0.1, this._scene);
            this._fountain.visibility = 0.1;

            this._particleSystem = new BABYLON.ParticleSystem("particles", 3000, this._scene);
            this._customEmitter = new BABYLON.CustomParticleEmitter();
            this._points = [ [-4, 5], // A
                [-2, -6], // B
                [6, 0.5]  // C//
                ];
            this._customEmitter.particlePositionGenerator = (index, particle, out) => {
                var r1 = Math.random()
                var r2 = Math.random()
                var s1 = Math.sqrt(r1)
                var x = this._points[0][0] * (1.0 - s1) + this._points[1][0] * (1.0 - r2) * s1 + this._points[2][0] * r2 * s1
                var y = this._points[0][1] * (1.0 - s1) + this._points[1][1] * (1.0 - r2) * s1 + this._points[2][1] * r2 * s1
                out.x = x
                out.y = y;
                out.z = Math.random() * 5;
            }

            this._customEmitter.particleDestinationGenerator = (index, particle, out) => {
                var r1 = Math.random()
                var r2 = Math.random()
                var s1 = Math.sqrt(r1)
                var x = this._points[0][0] * (1.0 - s1) + this._points[1][0] * (1.0 - r2) * s1 + this._points[2][0] * r2 * s1
                var y = this._points[0][1] * (1.0 - s1) + this._points[1][1] * (1.0 - r2) * s1 + this._points[2][1] * r2 * s1
                out.x = x;
                out.y = y;
                out.z = Math.random() * 5;
            }
            this._particleSystem.particleTexture = new BABYLON.Texture("./textures/smoke2.png", this._scene);
            this._particleSystem.minSize = 0.05;
            this._particleSystem.maxSize = 0.1;
            this._particleSystem.emitRate = 1000;
            this._particleSystem.particleEmitterType = this._customEmitter;
            this._particleSystem.emitter = this._fountain;

            this._particleSystem.start();

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

        setEmitRate(_emitRate: number) {
            this._particleSystem.emitRate = _emitRate;
        }
        setLifeTime(_lifeTime: number) {
            this._particleSystem.maxLifeTime = _lifeTime;
        }
        setMinSize(_minSize: number) {
            this._particleSystem.minSize = _minSize;
        }
        setMaxSize(_maxSize: number) {
            this._particleSystem.maxSize = _maxSize;
        }

    }

    let inputParticleLifeTime : HTMLInputElement;
    let inputEmitRate : HTMLInputElement;
    let minSize : HTMLInputElement;
    let maxSize : HTMLInputElement;
    function main(): void {
        inputParticleLifeTime = <HTMLInputElement>document.getElementById("particles-lifetime");
        inputParticleLifeTime.addEventListener('input', setParticleLifeTime);
        inputEmitRate = <HTMLInputElement>document.getElementById("particles-emit-rate");
        inputEmitRate.addEventListener('input', setParticleEmitRate)
        minSize = <HTMLInputElement>document.getElementById("min-size");
        minSize.addEventListener('input', setParticleMinRate)
        maxSize = <HTMLInputElement>document.getElementById("max-size");
        maxSize.addEventListener('input', setParticleMaxRate)
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

    function setParticleLifeTime() {
        scene.setLifeTime(this.value/30);
    }

    function setParticleEmitRate() {
        scene.setEmitRate(this.value * 30);
    }

    function setParticleMinRate() {
        scene.setMinSize(this.value/200);
    }

    function setParticleMaxRate() {
        scene.setMaxSize(this.value/200);
    }
}
