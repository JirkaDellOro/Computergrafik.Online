///<reference path="babylon.d.ts" />
namespace UvMapping {

    export class Game {
        _picUrl: string;
        private _canvas: HTMLCanvasElement;
        private _engine: BABYLON.Engine;
        private _scene: BABYLON.Scene;
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


            this._camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), this._scene);
            this._camera.setPosition(new BABYLON.Vector3(0, 0, -10));   
            this._camera.attachControl(this._canvas, true);
            this._camera.setTarget(BABYLON.Vector3.Zero());

            // Create a basic light
            this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
            this._light = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(0, -2, 0), this._scene);

            // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
            let sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, this._scene);

            let sphereMaterial = new BABYLON.StandardMaterial("texture1", this._scene);
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
        }
        set(_url: string): void {
            this._picUrl = _url;
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

    window.addEventListener('DOMContentLoaded', handleLoad);

    let game: Game;

    function handleLoad(): void {
        game = new Game('renderCanvas');

        main();
        // Create the scene.
        game.createScene();

        // Start render loop.
        game.doRender();
    }

    let stoneTexture: HTMLInputElement;
    let colorTexture: HTMLInputElement;
    let earthTexture: HTMLInputElement;


    function main(): void {
        stoneTexture = <HTMLInputElement>document.getElementById("StoneTexture");
        colorTexture = <HTMLInputElement>document.getElementById("ColorTexture");
        earthTexture = <HTMLInputElement>document.getElementById("EarthTexture");
       
        texturePicker();
        stoneTexture.addEventListener("change", texturePicker);
        colorTexture.addEventListener("change", texturePicker);
        earthTexture.addEventListener("change", texturePicker);
        
    }

    function texturePicker(): void {
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
}
