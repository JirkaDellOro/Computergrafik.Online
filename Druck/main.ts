let rangeInputZoom: HTMLInputElement;
let rangeValue: number;
let currWidth: number;
let difference: number;
let img: HTMLDivElement;

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
    }
    else if (_r.id == "radio-amplitude") {
        activeRadioValue = "AM";
    }
    else if (_r.id == "radio-frequency") {
        activeRadioValue = "FM";
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
