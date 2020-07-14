///<reference path="babylon.d.ts" />
var UvMapping;
(function (UvMapping) {
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
            this._camera.setPosition(new BABYLON.Vector3(0, 0, 10));
            this._camera.attachControl(this._canvas, false);
            this._camera.setTarget(BABYLON.Vector3.Zero());
            //this._roboter = BABYLON.MeshBuilder.CreateBox("box", {}, this._scene);
            this._roboter = BABYLON.SceneLoader.ImportMesh("body", "", "v_0_0_3_Roboter_szene(1).babylon");
            //BABYLON.SceneLoader.ImportMesh("birne", "", "KORTE.babylon", this._scene);
            this._plane = BABYLON.MeshBuilder.CreateGround('ground1', { width: 6, height: 6, subdivisions: 2 }, this._scene);
            var material = new BABYLON.StandardMaterial("cubeMaterial", this._scene);
            material.diffuseTexture = new BABYLON.Texture("./texture.jpg", this._scene);
            this._plane.material = material;
            // Create the 4 types of light
            this._ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(0, 1, 0), this._scene);
            this._pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-0, 5, 0), this._scene);
            this._pointLight.diffuse = new BABYLON.Color3(1, 1, 1);
            this._pointLight.specular = new BABYLON.Color3(1, 1, 1);
            this._pointLight.direction = new BABYLON.Vector3(0, -1, 0);
            this._pointLight.position = new BABYLON.Vector3(0, 5, 0);
            this._directionalLight = new BABYLON.DirectionalLight("directionalLight", new BABYLON.Vector3(0, 0, 0), this._scene);
            this._directionalLight.position = new BABYLON.Vector3(10, 10, 0);
            this._spotLight = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, -1, 0), Math.PI, 2, this._scene);
            this._spotLight.position = new BABYLON.Vector3(0, 10, 0);
            // Create a built-in "box" shape with the default parameters.
            this._ambientLight.intensity = 0;
            this._pointLight.intensity = 0;
            this._directionalLight.intensity = 0;
            this._spotLight.intensity = 0;
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
        Interaction.prototype.setPosXAmbientLight = function (_posX) {
            this._ambientLight.direction.x = _posX;
        };
        Interaction.prototype.setPosYAmbientLight = function (_posY) {
            this._ambientLight.direction.y = _posY;
        };
        Interaction.prototype.setPosZAmbientLight = function (_posZ) {
            this._ambientLight.direction.z = _posZ;
        };
        Interaction.prototype.setPosXPointLight = function (_posX) {
            this._pointLight.position.x = _posX;
        };
        Interaction.prototype.setPosYPointLight = function (_posY) {
            this._pointLight.position.z = _posY;
        };
        Interaction.prototype.setPosZPointLight = function (_posZ) {
            this._pointLight.position.z = _posZ;
        };
        Interaction.prototype.setDirXDirectionalLight = function (_posX) {
            this._directionalLight.direction.x = _posX;
        };
        Interaction.prototype.setDirYDirectionalLight = function (_posY) {
            this._directionalLight.direction.z = _posY;
        };
        Interaction.prototype.setDirZDirectionalLight = function (_posZ) {
            this._directionalLight.direction.z = _posZ;
        };
        Interaction.prototype.setPosXSpotLight = function (_posX) {
            this._spotLight.position.x = _posX;
        };
        Interaction.prototype.setPosYSpotLight = function (_posY) {
            this._spotLight.position.z = _posY;
        };
        Interaction.prototype.setPosZSpotLight = function (_posZ) {
            this._spotLight.position.z = _posZ;
        };
        Interaction.prototype.setPosLightBulb = function (_posX, _posY, _posZ) {
            this._scene.getMeshByName("Birne").position = new BABYLON.Vector3(_posX, _posY, _posZ);
        };
        return Interaction;
    }());
    var inputAmbientLight;
    var inputPointLight;
    var inputDirectionalLight;
    var inputSpotLight;
    var inputMoveAmbientLightXAxis;
    var inputMoveAmbientLightYAxis;
    var inputMoveAmbientLightZAxis;
    var inputMovePointLightXAxis;
    var inputMovePointLightYAxis;
    var inputMovePointLightZAxis;
    var inputMoveDirectionalLightXAxis;
    var inputMoveDirectionalLightYAxis;
    var inputMoveDirectionalLightZAxis;
    var inputMoveSpotLightXAxis;
    var inputMoveSpotLightYAxis;
    var inputMoveSpotLightZAxis;
    var lightButtons;
    function main() {
        //Add event listeners for changing light intensity;
        inputDirectionalLight = document.getElementById("directional-light");
        inputDirectionalLight.addEventListener("input", adaptDirectionalLight);
        inputPointLight = document.getElementById("point-light");
        inputPointLight.addEventListener("input", adaptPointLight);
        inputAmbientLight = document.getElementById("ambient-light");
        inputAmbientLight.addEventListener("input", adaptAmbientLight);
        inputSpotLight = document.getElementById("spot-light");
        inputSpotLight.addEventListener("input", adaptSpotLight);
        //Add event listener for adapting position and directions
        inputMoveAmbientLightXAxis = document.getElementById("x-axis-ambient-light");
        inputMoveAmbientLightXAxis.addEventListener("input", adaptAmbientLightDirection);
        inputMoveAmbientLightYAxis = document.getElementById("y-axis-ambient-light");
        inputMoveAmbientLightYAxis.addEventListener("input", adaptAmbientLightDirection);
        inputMoveAmbientLightZAxis = document.getElementById("z-axis-ambient-light");
        inputMoveAmbientLightZAxis.addEventListener("input", adaptAmbientLightDirection);
        inputMovePointLightXAxis = document.getElementById("x-axis-point-light");
        inputMovePointLightXAxis.addEventListener("input", adaptPointLightPosition);
        inputMovePointLightYAxis = document.getElementById("y-axis-point-light");
        inputMovePointLightYAxis.addEventListener("input", adaptPointLightPosition);
        inputMovePointLightZAxis = document.getElementById("z-axis-point-light");
        inputMovePointLightZAxis.addEventListener("input", adaptPointLightPosition);
        inputMoveDirectionalLightXAxis = document.getElementById("x-axis-directional-light");
        inputMoveDirectionalLightXAxis.addEventListener("input", adaptDirectionalLightDirection);
        inputMoveDirectionalLightYAxis = document.getElementById("y-axis-directional-light");
        inputMoveDirectionalLightYAxis.addEventListener("input", adaptDirectionalLightDirection);
        inputMoveDirectionalLightZAxis = document.getElementById("z-axis-directional-light");
        inputMoveDirectionalLightZAxis.addEventListener("input", adaptDirectionalLightDirection);
        inputMoveSpotLightXAxis = document.getElementById("x-axis-spot-light");
        inputMoveSpotLightXAxis.addEventListener("input", adaptSpotLightPosition);
        inputMoveSpotLightYAxis = document.getElementById("y-axis-spot-light");
        inputMoveSpotLightYAxis.addEventListener("input", adaptSpotLightPosition);
        inputMoveSpotLightZAxis = document.getElementById("z-axis-spot-light");
        inputMoveSpotLightZAxis.addEventListener("input", adaptSpotLightPosition);
        disableGroups();
        lightButtons = document.querySelectorAll(".btn");
        for (var i = 0; i < lightButtons.length; i++) {
            lightButtons[i].addEventListener('click', displayInputFields);
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
    function adaptPointLight() {
        var pointLight;
        pointLight = document.getElementById('point-light').value;
        scene._scene.getLightByName("pointLight").intensity = pointLight / 50;
    }
    function adaptAmbientLight() {
        var ambientInput;
        ambientInput = document.getElementById('ambient-light').value;
        scene._scene.getLightByName("ambientLight").intensity = ambientInput / 50;
    }
    function adaptDirectionalLight() {
        var directionalInput;
        directionalInput = document.getElementById('directional-light').value;
        scene._scene.getLightByName("directionalLight").intensity = directionalInput / 50;
    }
    function adaptSpotLight() {
        var directionalInput;
        directionalInput = document.getElementById('spot-light').value;
        scene._scene.getLightByName("spotLight").intensity = directionalInput / 50;
    }
    function adaptAmbientLightDirection() {
        var xAxis;
        var yAxis;
        var zAxis;
        xAxis = document.getElementById('x-axis-ambient-light').value;
        yAxis = document.getElementById('y-axis-ambient-light').value;
        zAxis = document.getElementById('z-axis-ambient-light').value;
        scene.setPosXAmbientLight(xAxis / 10);
        scene.setPosYAmbientLight(yAxis / 10);
        scene.setPosZAmbientLight(zAxis / 10);
        //scene.setPosLightBulb(xAxis/10, yAxis/40, zAxis/40);
    }
    function adaptPointLightPosition() {
        var xAxis;
        var yAxis;
        var zAxis;
        xAxis = document.getElementById('x-axis-point-light').value;
        yAxis = document.getElementById('y-axis-point-light').value;
        zAxis = document.getElementById('z-axis-point-light').value;
        scene.setPosXPointLight(xAxis / 10);
        scene.setPosYPointLight(yAxis / 10);
        scene.setPosZPointLight(zAxis / 10);
        //scene.setPosLightBulb(xAxis/40, yAxis/40, zAxis/40);
    }
    function adaptDirectionalLightDirection() {
        var xAxis;
        var yAxis;
        var zAxis;
        xAxis = document.getElementById('x-axis-directional-light').value;
        yAxis = document.getElementById('y-axis-directional-light').value;
        zAxis = document.getElementById('z-axis-directional-light').value;
        scene.setDirXDirectionalLight(xAxis / 10);
        scene.setDirYDirectionalLight(yAxis / 10);
        scene.setDirZDirectionalLight(zAxis / 10);
    }
    function adaptSpotLightPosition() {
        var xAxis;
        var yAxis;
        var zAxis;
        xAxis = document.getElementById('x-axis-spot-light').value;
        yAxis = document.getElementById('y-axis-spot-light').value;
        zAxis = document.getElementById('z-axis-spot-light').value;
        scene.setPosXSpotLight(xAxis / 10);
        scene.setPosYSpotLight(yAxis / 10);
        scene.setPosZSpotLight(zAxis / 10);
    }
    function displayInputFields() {
        disableGroups();
        var group = this.getAttribute("data-group");
        document.getElementById(group).style.display = 'block';
    }
    function disableGroups() {
        var lightGroup = document.getElementsByClassName("light-group");
        for (var i = 0; i < lightGroup.length; i++) {
            lightGroup[i].style.display = 'none';
        }
    }
})(UvMapping || (UvMapping = {}));
