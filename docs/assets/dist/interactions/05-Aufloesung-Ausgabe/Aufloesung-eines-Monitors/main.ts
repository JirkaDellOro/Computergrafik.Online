let rangeInput: HTMLInputElement;
let rangeValue: number;
let currWidth: number;
let difference: number;
let maxHeight: number = 2800;
let img: HTMLDivElement;

window.addEventListener("load", main);

function main(): void {
    rangeInput = document.getElementById("rangeIP") as HTMLInputElement;
    rangeValue = parseFloat(rangeInput.value);
    img = document.getElementById("imgcontainer") as HTMLDivElement;
}

function zoom(): void {
        console.log(img.style.backgroundSize = 100 * rangeValue + "%");
}

function updateSlider(_r: HTMLInputElement) {
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