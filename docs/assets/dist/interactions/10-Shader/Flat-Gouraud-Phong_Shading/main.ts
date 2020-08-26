let imgContainer: HTMLDivElement;
let flatCheck: HTMLInputElement;
let gouraudCheck: HTMLInputElement;
let phongCheck: HTMLInputElement;


window.addEventListener("load", main);

function main(): void {
    flatCheck = document.getElementById("flatCheck") as HTMLInputElement;
    gouraudCheck = document.getElementById("gouraudCheck") as HTMLInputElement;
    phongCheck = document.getElementById("phongCheck") as HTMLInputElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
    load();
    flatCheck.addEventListener("change", this.changeState);
    gouraudCheck.addEventListener("change", this.changeState);
    phongCheck.addEventListener("change", this.changeState);
}

function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/flat-shader-bg.jpg",
    "img/gouraud-shader-bg.jpg",
    "img/phong-shader-bg.jpg"
)


function load(): void {
    changeState();
}

function changeState(): void {
    if (flatCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/flat-shader-bg.jpg')";
    if (gouraudCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/gouraud-shader-bg.jpg')";
    if (phongCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/phong-shader-bg.jpg')";
}
