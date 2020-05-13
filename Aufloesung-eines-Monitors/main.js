var rangeInput;
var rangeValue;
var currWidth;
var difference;
var maxHeight = 2800;
var img;
window.addEventListener("load", main);
function main() {
    rangeInput = document.getElementById("rangeIP");
    rangeValue = parseFloat(rangeInput.value);
    img = document.getElementById("imgcontainer");
}
function zoom() {
    console.log(img.style.backgroundSize = 100 * rangeValue + "%");
}
function updateSlider(_r) {
    currWidth = img.clientWidth;
    var rangeNewValue = parseFloat(_r.value);
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
