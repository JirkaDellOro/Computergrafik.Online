///<reference path="babylon.d.ts" />
namespace UvMapping {
    // let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");

    export class Game {
        _picUrl: string;
        _scene: BABYLON.Scene;
        private _sphere: any;
        private _sphereMaterial: any;
        private _canvas: HTMLCanvasElement;
        private _engine: BABYLON.Engine;
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
            this._camera.setPosition(new BABYLON.Vector3(0, 0, 6));
            this._camera.attachControl(this._canvas, false);
            this._camera.setTarget(BABYLON.Vector3.Zero());


            // Create a basic light
            this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
            this._light = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(0, -2, 0), this._scene);

            // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
            this._sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, this._scene);


            this._sphereMaterial = new BABYLON.StandardMaterial("texture1", this._scene);

            // Move the sphere upward 1/2 of its height.
            this._sphere.rotation.z = 185.35;
            // this._sphere.position.y = 1;



        }
        set(_url: string): void {
            this._picUrl = _url;
        }
        changeMaterial(): void {

            if (this._picUrl == null) {
                this._sphereMaterial.diffuseTexture = new BABYLON.Texture("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6iV2jeZgCYVgWQ1sKCGFO4G_uYVrTy6YauveLASLOfF3P2ECJ&usqp=CAU", this._scene);

            } else {
                this._sphereMaterial.diffuseTexture = new BABYLON.Texture(this._picUrl, this._scene);
            }


            this._sphere.material = this._sphereMaterial;
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


    let crc2: CanvasRenderingContext2D;
    let flag: boolean = false;
    let startX: number;
    let startY: number;
    let moveX: number;
    let moveY: number;
    let dataUrl: string;
    let canvas: HTMLCanvasElement;
    let button: HTMLButtonElement;


    function main(): void {
        canvas = <HTMLCanvasElement>document.getElementById("canvas1");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "beige";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        crc2.beginPath();
        crc2.moveTo(canvas.width * 0.2, 0);
        crc2.lineTo(canvas.width * 0.2, canvas.height);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(canvas.width * 0.4, 0);
        crc2.lineTo(canvas.width * 0.4, canvas.height);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(canvas.width * 0.6, 0);
        crc2.lineTo(canvas.width * 0.6, canvas.height);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(canvas.width * 0.8, 0);
        crc2.lineTo(canvas.width * 0.8, canvas.height);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(canvas.width * 1 - 2, 0);
        crc2.lineTo(canvas.width * 1 - 2, canvas.height);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(0, canvas.height / 2);
        crc2.lineTo(canvas.width, canvas.height / 2);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();



        game.set(canvas.toDataURL("png", 0.01));

        setTimeout(function () { game.changeMaterial(); }, 0);
        console.log(canvas.toDataURL("png", 0.7));



        dataUrl = canvas.toDataURL();
        // console.log(crc2);
        button = <HTMLButtonElement>document.getElementById("clear");
        button.addEventListener("click", main);
        canvas.addEventListener("mousedown", paint);
        canvas.addEventListener("mousemove", paint);
        canvas.addEventListener("mouseout", paint);
        canvas.addEventListener("mouseup", paint);

        canvas.addEventListener("touchstart", paintTouch);
        canvas.addEventListener("touchmove", paintTouch);
        canvas.addEventListener("touchend", paintTouch);
        canvas.addEventListener("touchcancel", paintTouch);

    }
    function draw(): void {
        // console.log("Start:" + startX, startY);
        // console.log("Move:" + moveX, moveY);
        crc2.beginPath();
        crc2.moveTo(startX, startY);
        crc2.lineTo(moveX, moveY);
        crc2.strokeStyle = "red";
        crc2.lineWidth = 4;
        crc2.stroke();
        crc2.closePath();

    }

    function paint(_event: MouseEvent): void {
        if (event?.type == "mousedown") {
            // console.log("mosedown:" + _event.offsetX, _event.offsetY);
            flag = true;
            startX = _event.offsetX;
            startY = _event.offsetY;

        }
        if (event?.type == "mouseout" || event?.type == "mouseup") {
            flag = false;

            setTimeout(function () { game.changeMaterial(); }, 80);
        }
        if (event?.type == "mousemove") {
            // console.log(flag);
            if (flag) {
                // console.log("mosemove");
                moveX = _event.offsetX;
                moveY = _event.offsetY;

                draw();

                game.set(canvas.toDataURL("jpg", 0.01));
                console.log(canvas.toDataURL());
                startX = moveX;
                startY = moveY;
            }
        }
    }
    function paintTouch(_event: TouchEvent): void {
        if (_event?.type == "touchstart") {
            let touches = _event.touches[0];
            // console.log("mosedown:" + _event.offsetX, _event.offsetY);
            flag = true;
            startX = touches.pageX;
            startY = touches.pageY;

        }
        if (_event?.type == "touchcancel" || _event?.type == "touchend") {
            flag = false;

            setTimeout(function () { game.changeMaterial(); }, 80);
        }
        if (_event?.type == "touchmove") {
            // console.log(flag);
            if (flag) {
                let touches = _event.touches[0]
                // console.log("mosemove");
                moveX = touches.pageX;
                moveY = touches.pageY;

                draw();

                game.set(canvas.toDataURL("jpg", 0.01));
                console.log(canvas.toDataURL());
                startX = moveX;
                startY = moveY;
            }
        }
    }

}
