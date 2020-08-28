let twobit: HTMLInputElement;
let fourbit: HTMLInputElement;
let eightbit: HTMLInputElement;
let twentyfourbit: HTMLInputElement;
let fourtyeightbit: HTMLInputElement;

let labelcontainer: HTMLDivElement;

let imgContainer: HTMLDivElement;

let images: HTMLImageElement[] = [];

window.addEventListener("load", init);

function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/robot2.png",
    "img/robot4.png",
    "img/robot8.png",
    "img/robot24.png",
    "img/robot48.png"
)


function init(): void {
    twobit = document.getElementById("2-bit-radio") as HTMLInputElement;
    fourbit = document.getElementById("4-bit-radio") as HTMLInputElement;
    eightbit = document.getElementById("8-bit-radio") as HTMLInputElement;
    twentyfourbit = document.getElementById("24-bit-radio") as HTMLInputElement;
    fourtyeightbit = document.getElementById("48-bit-radio") as HTMLInputElement;

    labelcontainer = document.getElementById("data-label") as HTMLDivElement;

    imgContainer = document.getElementById("image-container") as HTMLDivElement;

    updateImage();
}

function updateImage(): void {
    labelcontainer.innerText = "Datenmenge: "
    if (twobit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot2.png')";
        labelcontainer.innerText += "18 KB";
    }
    if (fourbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot4.png')";
        labelcontainer.innerText += "32 KB";
    }
    if (eightbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot8.png')";
        labelcontainer.innerText += "96 KB";
    }
    if (twentyfourbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot24.png')";
        labelcontainer.innerText += "136 KB";
    }
    if (fourtyeightbit.checked) {
        imgContainer.style.backgroundImage = "url('img/robot48.png')";
        labelcontainer.innerText += "2.150 KB";
    }
}