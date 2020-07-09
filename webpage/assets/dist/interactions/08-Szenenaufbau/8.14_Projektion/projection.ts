///<reference path="babylon.d.ts" />

class Projection {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _roboter: any;
    private _camera: BABYLON.ArcRotateCamera;
    private _light: BABYLON.Light;

    constructor(canvasElement: string) {
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;

        this._engine = new BABYLON.Engine(this._canvas, true);
    }

    createScene(): void {
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
        this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), this._scene);
        this._camera.setPosition(new BABYLON.Vector3(0, 0, 10));
        this._camera.setTarget(BABYLON.Vector3.Zero());
        this._camera.attachControl(this._canvas, false);
        
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        
        this._roboter = BABYLON.SceneLoader.ImportMesh("body", "", "v_0_0_3_Roboter_szene.babylon");
        
        // Create a built-in "sphere" shape; with 16 segments and diameter of 2.        
    }

    doRender(): void {
        // Run the render loop.
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        // The canvas/window resize event handler.
        window.addEventListener('resize', () => {
            this._engine.resize();
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Create the game using the 'renderCanvas'.
    let projection = new Projection('renderCanvas');
    let paraProjection = new Projection('renderCanvasPara');

    // Create the scene.
    projection.createScene();
    paraProjection.createScene();

    // Start render loop.
    projection.doRender();
    paraProjection.doRender();
});