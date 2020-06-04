let imgContainer: HTMLDivElement;
let xCheck: HTMLInputElement;
let yCheck: HTMLInputElement;
let zCheck: HTMLInputElement;
let images = [];


window.addEventListener("load", main);

function main(): void {
    xCheck = document.getElementById("xCheck") as HTMLInputElement;
    yCheck = document.getElementById("yCheck") as HTMLInputElement;
    zCheck = document.getElementById("zCheck") as HTMLInputElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
    load();
    xCheck.addEventListener("change", this.changeState);
    yCheck.addEventListener("change", this.changeState);
    zCheck.addEventListener("change", this.changeState);
}

function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/(i)_Mirror_keine_spiegelung.jpg",
    "img/(i)_Mirror_X.jpg",
    "img/(i)_Mirror_XY.jpg",
    "img/(i)_Mirror_XYZ.jpg",
    "img/(i)_Mirror_XZ.jpg",
    "img/(i)_Mirror_Y.jpg",
    "img/(i)_Mirror_YZ.jpg",
    "img/(i)_Mirror_Z.jpg",
)

function load(): void {
    changeState();
}

function changeState(): void {
    let axis: string = "";

    if (xCheck.checked == true)
        axis += "X";
    if (yCheck.checked == true)
        axis += "Y";
    if (zCheck.checked == true)
        axis += "Z";

    if (axis === "") {
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_keine_spiegelung.jpg')";
    }
    else
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_" + axis + ".jpg')";

}