var slider;
var imgContainer;
var label;
var dateigroesse = ["60,5", "33,9", "21,8", "21,3", "13,7", "11,2", "9,53", "9,01"];
var images = [];
window.addEventListener("load", init);
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
// @ts-ignore
preload("img/jpg00.jpg", "img/jpg01.jpg", "img/jpg02.jpg", "img/jpg03.jpg", "img/jpg04.jpg", "img/jpg05.jpg", "img/jpg06.jpg", "img/jpg07.jpg");
function init() {
    slider = document.getElementById("compression-slider");
    imgContainer = document.getElementById("image-container");
    label = document.getElementById("datengroesse");
    updateSlider(slider);
}
function updateSlider(_s) {
    var value = parseInt(_s.value);
    label.innerText = "Dateigröße: " + dateigroesse[_s.value] + " KB";
    imgContainer.style.backgroundImage = "url('img/jpg0" + value.toString() + ".jpg')";
}
