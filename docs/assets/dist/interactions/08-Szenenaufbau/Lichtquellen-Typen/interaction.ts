///<reference path="babylon.d.ts" />

namespace UvMapping {
    // let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas1");

    class Interaction {
        _scene: BABYLON.Scene;
        private _canvas: HTMLCanvasElement;
        private _engine: BABYLON.Engine;
        private _camera: BABYLON.ArcRotateCamera;

        private _lightBulb: BABYLON.Mesh;
        private _plane: BABYLON.Mesh;
        private _ambientLight: BABYLON.HemisphericLight;
        private _pointLight: BABYLON.PointLight;
        private _directionalLight: BABYLON.DirectionalLight;
        private _spotLight: BABYLON.SpotLight;
        private _roboter: any;

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
            //this._roboter = BABYLON.MeshBuilder.CreateBox("box", {}, this._scene);
            this._roboter = BABYLON.SceneLoader.ImportMesh("body", "", "v_0_0_3_Roboter_szene(1).babylon");
            //BABYLON.SceneLoader.ImportMesh("birne", "", "KORTE.babylon", this._scene);
            this._plane = BABYLON.MeshBuilder.CreateGround('ground1',
                {width: 6, height: 6, subdivisions: 2}, this._scene);


            // Create the 4 types of light
            this._ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(0, 1, 0), this._scene);
            this._pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-0, 5, 0), this._scene);
            this._pointLight.diffuse = new BABYLON.Color3(1, 1, 1);
            this._pointLight.specular = new BABYLON.Color3(1, 1, 1);
            this._pointLight.direction = new BABYLON.Vector3(0,-1,0)
            this._pointLight.position = new BABYLON.Vector3(0, 5, 0);
            this._directionalLight = new BABYLON.DirectionalLight("directionalLight", new BABYLON.Vector3(0,0,0), this._scene);
            this._directionalLight.position = new BABYLON.Vector3(10,10,0);
            this._spotLight = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 10, 0),
                new BABYLON.Vector3(0, -1, 0), Math.PI , 2, this._scene);
            this._spotLight.position = new BABYLON.Vector3(0,10,0);
            // Create a built-in "box" shape with the default parameters.
            this._ambientLight.intensity = 0;
            this._pointLight.intensity = 0;
            this._directionalLight.intensity = 0;
            this._spotLight.intensity = 0;
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
        setPosXAmbientLight(_posX:number){
            this._ambientLight.direction.x = _posX;
        }
        setPosYAmbientLight(_posY:number){
            this._ambientLight.direction.y = _posY;
        }
        setPosZAmbientLight(_posZ:number) {
            this._ambientLight.direction.z = _posZ;
        }
        setPosXPointLight(_posX:number){
            this._pointLight.position.x = _posX;
        }
        setPosYPointLight(_posY:number){
            this._pointLight.position.z = _posY;
        }
        setPosZPointLight(_posZ:number){
            this._pointLight.position.z = _posZ;
        }
        setDirXDirectionalLight(_posX:number){
            this._directionalLight.direction.x = _posX;
        }
        setDirYDirectionalLight(_posY:number){
            this._directionalLight.direction.z = _posY;
        }
        setDirZDirectionalLight(_posZ:number){
            this._directionalLight.direction.z = _posZ;
        }
        setPosXSpotLight(_posX:number){
            this._spotLight.position.x = _posX;
        }
        setPosYSpotLight(_posY:number){
            this._spotLight.position.z = _posY;
        }
        setPosZSpotLight(_posZ:number){
            this._spotLight.position.z = _posZ;
        }
        setPosLightBulb(_posX:number, _posY:number, _posZ:number) {
            this._scene.getMeshByName("Birne").position = new BABYLON.Vector3(_posX, _posY, _posZ);
        }
    }
    let inputAmbientLight: HTMLInputElement;
    let inputPointLight: HTMLInputElement;
    let inputDirectionalLight: HTMLInputElement;
    let inputSpotLight: HTMLInputElement;

    let inputMoveAmbientLightXAxis: HTMLInputElement;
    let inputMoveAmbientLightYAxis: HTMLInputElement;
    let inputMoveAmbientLightZAxis: HTMLInputElement;

    let inputMovePointLightXAxis: HTMLInputElement;
    let inputMovePointLightYAxis: HTMLInputElement;
    let inputMovePointLightZAxis: HTMLInputElement;

    let inputMoveDirectionalLightXAxis: HTMLInputElement;
    let inputMoveDirectionalLightYAxis: HTMLInputElement;
    let inputMoveDirectionalLightZAxis: HTMLInputElement;

    let inputMoveSpotLightXAxis: HTMLInputElement;
    let inputMoveSpotLightYAxis: HTMLInputElement;
    let inputMoveSpotLightZAxis: HTMLInputElement;


    let lightButtons: NodeListOf<HTMLButtonElement>;
    function main(): void {
        //Add event listeners for changing light intensity;
        inputDirectionalLight = <HTMLInputElement>document.getElementById("directional-light");
        inputDirectionalLight.addEventListener("input", adaptDirectionalLight);

        inputPointLight = <HTMLInputElement>document.getElementById("point-light");
        inputPointLight.addEventListener("input", adaptPointLight);

        inputAmbientLight = <HTMLInputElement>document.getElementById("ambient-light");
        inputAmbientLight.addEventListener("input", adaptAmbientLight);

        inputSpotLight = <HTMLInputElement>document.getElementById("spot-light");
        inputSpotLight.addEventListener("input", adaptSpotLight);

        //Add event listener for adapting position and directions
        inputMoveAmbientLightXAxis = <HTMLInputElement>document.getElementById("x-axis-ambient-light");
        inputMoveAmbientLightXAxis.addEventListener("input", adaptAmbientLightDirection);

        inputMoveAmbientLightYAxis = <HTMLInputElement>document.getElementById("y-axis-ambient-light");
        inputMoveAmbientLightYAxis.addEventListener("input", adaptAmbientLightDirection);

        inputMoveAmbientLightZAxis = <HTMLInputElement>document.getElementById("z-axis-ambient-light");
        inputMoveAmbientLightZAxis.addEventListener("input", adaptAmbientLightDirection);

        inputMovePointLightXAxis = <HTMLInputElement>document.getElementById("x-axis-point-light");
        inputMovePointLightXAxis.addEventListener("input", adaptPointLightPosition);

        inputMovePointLightYAxis = <HTMLInputElement>document.getElementById("y-axis-point-light");
        inputMovePointLightYAxis.addEventListener("input", adaptPointLightPosition);

        inputMovePointLightZAxis = <HTMLInputElement>document.getElementById("z-axis-point-light");
        inputMovePointLightZAxis.addEventListener("input", adaptPointLightPosition);

        inputMoveDirectionalLightXAxis = <HTMLInputElement>document.getElementById("x-axis-directional-light");
        inputMoveDirectionalLightXAxis.addEventListener("input", adaptDirectionalLightDirection);

        inputMoveDirectionalLightYAxis = <HTMLInputElement>document.getElementById("y-axis-directional-light");
        inputMoveDirectionalLightYAxis.addEventListener("input", adaptDirectionalLightDirection);

        inputMoveDirectionalLightZAxis = <HTMLInputElement>document.getElementById("z-axis-directional-light");
        inputMoveDirectionalLightZAxis.addEventListener("input", adaptDirectionalLightDirection);

        inputMoveSpotLightXAxis = <HTMLInputElement>document.getElementById("x-axis-spot-light");
        inputMoveSpotLightXAxis.addEventListener("input", adaptSpotLightPosition);

        inputMoveSpotLightYAxis = <HTMLInputElement>document.getElementById("y-axis-spot-light");
        inputMoveSpotLightYAxis.addEventListener("input", adaptSpotLightPosition);

        inputMoveSpotLightZAxis = <HTMLInputElement>document.getElementById("z-axis-spot-light");
        inputMoveSpotLightZAxis.addEventListener("input", adaptSpotLightPosition);


        disableGroups();
        lightButtons = document.querySelectorAll(".btn");
        for(let i = 0; i < lightButtons.length; i++) {
            lightButtons[i].addEventListener('click', displayInputFields)
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

    function adaptPointLight() {
        let pointLight : number;
        pointLight = document.getElementById('point-light').value;
        scene._scene.getLightByName("pointLight").intensity = pointLight/50;
    }

    function adaptAmbientLight(){
        let ambientInput : number;
        ambientInput = document.getElementById('ambient-light').value;
        scene._scene.getLightByName("ambientLight").intensity = ambientInput/50;
    }

    function adaptDirectionalLight() {
        let directionalInput : number;
        directionalInput = document.getElementById('directional-light').value;
        scene._scene.getLightByName("directionalLight").intensity = directionalInput/50;
    }

    function adaptSpotLight() {
        let directionalInput : number;
        directionalInput = document.getElementById('spot-light').value;
        scene._scene.getLightByName("spotLight").intensity = directionalInput/50;
    }

    function adaptAmbientLightDirection() {
        let xAxis : number;
        let yAxis : number;
        let zAxis : number;
        xAxis = document.getElementById('x-axis-ambient-light').value;
        yAxis = document.getElementById('y-axis-ambient-light').value;
        zAxis = document.getElementById('z-axis-ambient-light').value;
        scene.setPosXAmbientLight(xAxis/10);
        scene.setPosYAmbientLight(yAxis/10);
        scene.setPosZAmbientLight(zAxis/10)
        //scene.setPosLightBulb(xAxis/10, yAxis/40, zAxis/40);
    }

    function adaptPointLightPosition() {
        let xAxis : number;
        let yAxis : number;
        let zAxis : number;
        xAxis = document.getElementById('x-axis-point-light').value;
        yAxis = document.getElementById('y-axis-point-light').value;
        zAxis = document.getElementById('z-axis-point-light').value;
        scene.setPosXPointLight(xAxis/10);
        scene.setPosYPointLight(yAxis/10);
        scene.setPosZPointLight(zAxis/10)
        //scene.setPosLightBulb(xAxis/40, yAxis/40, zAxis/40);
    }

    function adaptDirectionalLightDirection() {
        let xAxis : number;
        let yAxis : number;
        let zAxis : number;
        xAxis = document.getElementById('x-axis-directional-light').value;
        yAxis = document.getElementById('y-axis-directional-light').value;
        zAxis = document.getElementById('z-axis-directional-light').value;
        scene.setDirXDirectionalLight(xAxis/10);
        scene.setDirYDirectionalLight(yAxis/10);
        scene.setDirZDirectionalLight(zAxis/10)
    }

    function adaptSpotLightPosition() {
        let xAxis : number;
        let yAxis : number;
        let zAxis : number;
        xAxis = document.getElementById('x-axis-spot-light').value;
        yAxis = document.getElementById('y-axis-spot-light').value;
        zAxis = document.getElementById('z-axis-spot-light').value;
        scene.setPosXSpotLight(xAxis/10);
        scene.setPosYSpotLight(yAxis/10);
        scene.setPosZSpotLight(zAxis/10);
    }

    function displayInputFields(){
        disableGroups();
        let group = this.getAttribute("data-group");
        document.getElementById(group).style.display = 'block'
    }

    function disableGroups(){
        let lightGroup = document.getElementsByClassName("light-group");
        for(let i = 0; i < lightGroup.length; i ++) {
            lightGroup[i].style.display = 'none';
        }
    }
}
