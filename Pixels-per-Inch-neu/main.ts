let inchCon: number = 2.54;
let pxAverage: number[] = [1600, 1200];
let pxX: number;
let pxY: number;
let cmX: number;
let cmY: number;
let inputR: number;
let outputR: number;

let slider: HTMLInputElement;
let sliderLabel: HTMLDivElement;
let heightInput: HTMLInputElement;
let widthInput: HTMLInputElement;
let inOutput: HTMLInputElement;
let outOutput: HTMLInputElement;

window.addEventListener("load", main);



function main(): void {
    slider = document.getElementById("pixelRange") as HTMLInputElement;
    sliderLabel = document.getElementById("pixel-output") as HTMLDivElement;
    heightInput = document.getElementById("height") as HTMLInputElement;
    widthInput = document.getElementById("width") as HTMLInputElement;
    inOutput = document.getElementById("eingabe-output") as HTMLInputElement;
    outOutput = document.getElementById("ausgabe-output") as HTMLInputElement;
    setInputFilter(widthInput, function(value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    });
    //input filter

    calcResolution();
    updatePixels();

}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

function calcResolution(): void {
    outputR = (pxX * inchCon) / cmX;
    outputR = Math.round(outputR * 10) / 10;
    inputR = (pxX * pxY) / 1000000;
    inputR = Math.round(inputR * 10) / 10;
}

function formCheck(event): void {
    let height: string = heightInput.value;
    if (height == "") {
        console.log("testfalse");
    }
    else {
        event.preventDefault();
        inOutput.value = inputR.toString() + " MP";
        outOutput.value = outputR.toString() + " PPI";
        console.log("test");
    }
}

function updateCentimeters(): void {
cmX = Math.round(parseFloat(widthInput.value) * 100) / 100;
cmY = cmX * (3 / 4);
heightInput.value = cmY.toString();
if (widthInput.value == "")
    heightInput.value = "";
calcResolution();
}

function updatePixels(): void {
    pxX = Math.round(pxAverage[0] * parseFloat(slider.value));
    pxY = Math.round(pxAverage[1] * parseFloat(slider.value));

    sliderLabel.textContent = pxX + " x " + pxY;
    calcResolution();

}