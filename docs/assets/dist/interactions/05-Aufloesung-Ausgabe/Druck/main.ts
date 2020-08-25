let rangeInputZoom: HTMLInputElement;
let rangeValue: number;
let currWidth: number;
let difference: number;
let img: HTMLDivElement;
let images = [];

let mode: string;
let activeRadioValue: string;

let rangeInputDots: HTMLInputElement;
let dotValue: number;


window.addEventListener("load", main);

function main(): void {
    rangeInputZoom = document.getElementById("rangeIP1") as HTMLInputElement;
    rangeValue = parseFloat(rangeInputZoom.value);
    img = document.getElementById("imgcontainer") as HTMLDivElement;
    rangeInputDots = document.getElementById("rangeIP2") as HTMLInputElement;
    dotValue = parseFloat(rangeInputDots.value);
    activeRadioValue = "OG";
}

function zoom(): void {
    console.log(img.style.backgroundSize = 100 * rangeValue + "%");
}

function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/RobotAM1.png",
    "img/RobotAM2.png",
    "img/RobotAM3.png",
    "img/RobotAM4.png",
    "img/RobotAM5.png",
    "img/RobotFM1.png",
    "img/RobotFM2.png",
    "img/RobotFM3.png",
    "img/RobotFM4.png",
    "img/RobotFM5.png",
    "img/RobotOG.png"
)

function updateZoomSlider(_r: HTMLInputElement) {
    currWidth = img.clientWidth;
    let rangeNewValue: number = parseFloat(_r.value);
    if (rangeNewValue > rangeValue) {
        difference = (rangeNewValue - rangeValue);
        rangeValue = rangeNewValue;
        zoom();
    }
    else if (rangeNewValue < rangeValue) {
        difference = (rangeValue - rangeNewValue);
        rangeValue = rangeNewValue;
        zoom();
    }
    console.log(rangeValue);
}

function updateDotSlider(_r: HTMLInputElement) {
    dotValue = parseFloat(_r.value);
    updateImage();
}

function updateRadioButtons(_r: HTMLInputElement) {
    if (_r.id == "radio-original") {
        activeRadioValue = "OG";
        rangeInputDots.disabled = true;
    }
    else if (_r.id == "radio-amplitude") {
        activeRadioValue = "AM";
        rangeInputDots.disabled = false;
    }
    else if (_r.id == "radio-frequency") {
        activeRadioValue = "FM";
        rangeInputDots.disabled = false;
    }
    updateImage();
}

function updateImage() {
    if(activeRadioValue == "OG") {
        img.style.backgroundImage = "url('img/RobotOG.png')";
        return;
    }
    img.style.backgroundImage = "url('img/Robot" + activeRadioValue + dotValue + ".png')";
}
