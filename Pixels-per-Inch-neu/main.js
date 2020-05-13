var inchCon = 2.54;
var pxAverage = [1600, 1200];
var pxX;
var pxY;
var cmX;
var cmY;
var inputR;
var outputR;
var slider;
var sliderLabel;
var heightInput;
var widthInput;
var inOutput;
var outOutput;
window.addEventListener("load", main);
function main() {
    slider = document.getElementById("pixelRange");
    sliderLabel = document.getElementById("pixel-output");
    heightInput = document.getElementById("height");
    widthInput = document.getElementById("width");
    inOutput = document.getElementById("eingabe-output");
    outOutput = document.getElementById("ausgabe-output");
    setInputFilter(widthInput, function (value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    });
    //input filter
    calcResolution();
    updatePixels();
}
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            }
            else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
            else {
                this.value = "";
            }
        });
    });
}
function calcResolution() {
    outputR = (pxX * inchCon) / cmX;
    outputR = Math.round(outputR * 10) / 10;
    inputR = (pxX * pxY) / 1000000;
    inputR = Math.round(inputR * 10) / 10;
}
function formCheck(event) {
    var height = heightInput.value;
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
function updateCentimeters() {
    cmX = Math.round(parseFloat(widthInput.value) * 100) / 100;
    cmY = cmX * (3 / 4);
    heightInput.value = cmY.toString();
    if (widthInput.value == "")
        heightInput.value = "";
    calcResolution();
}
function updatePixels() {
    pxX = Math.round(pxAverage[0] * parseFloat(slider.value));
    pxY = Math.round(pxAverage[1] * parseFloat(slider.value));
    sliderLabel.textContent = pxX + " x " + pxY;
    calcResolution();
}
