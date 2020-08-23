let ySlider: HTMLInputElement;
let mSlider: HTMLInputElement;
let cSlider: HTMLInputElement;
let bSlider: HTMLInputElement;

let yLabel: HTMLLabelElement;
let mLabel: HTMLLabelElement;
let cLabel: HTMLLabelElement;
let bLabel: HTMLLabelElement;

let yImg: HTMLImageElement;
let mImg: HTMLImageElement;
let cImg: HTMLImageElement;
let bImg: HTMLImageElement;


window.addEventListener("load", init);

function init(): void {
    ySlider = document.getElementById("yellow-range") as HTMLInputElement;
    mSlider = document.getElementById("magenta-range") as HTMLInputElement;
    cSlider = document.getElementById("cyan-range") as HTMLInputElement;
    bSlider = document.getElementById("black-range") as HTMLInputElement;

    yLabel = document.getElementById("yLabel") as HTMLLabelElement;
    mLabel = document.getElementById("mLabel") as HTMLLabelElement;
    cLabel = document.getElementById("cLabel") as HTMLLabelElement;
    bLabel = document.getElementById("bLabel") as HTMLLabelElement;

    yImg = document.getElementById("yImg") as HTMLImageElement;
    mImg = document.getElementById("mImg") as HTMLImageElement;
    cImg = document.getElementById("cImg") as HTMLImageElement;
    bImg = document.getElementById("bImg") as HTMLImageElement;
}

function rangeChange(_r: HTMLInputElement): void {
    let rotatingImg: HTMLImageElement;
    let relatedLabel: HTMLLabelElement;
    let color: string;
    if (_r == ySlider) {
        rotatingImg = yImg;
        relatedLabel = yLabel;
        color = "Gelb";
    }
    if (_r == mSlider) {
        rotatingImg = mImg;
        relatedLabel = mLabel;
        color = "Magenta";
    }
    if (_r == cSlider) {
        rotatingImg = cImg;
        relatedLabel = cLabel;
        color = "Cyan";
    }
    if (_r == bSlider) {
        rotatingImg = bImg;
        relatedLabel = bLabel;
        color = "Schwarz";
    }

    rotatingImg.style.transform = "rotate(" + _r.value.toString() + "deg)";
    relatedLabel.innerText = color + ": " + _r.value.toString() + "°";




}

