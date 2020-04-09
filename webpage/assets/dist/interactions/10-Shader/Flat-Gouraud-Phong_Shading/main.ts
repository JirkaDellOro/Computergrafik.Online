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

function load(): void {
    changeState();
}

function changeState(): void {
    if (flatCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/flat-shader-bg.png')";
    if (gouraudCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/gouraud-shader-bg.png')";
    if (phongCheck.checked == true)
        imgContainer.style.backgroundImage = "url('img/phong-shader-bg.png')";
}