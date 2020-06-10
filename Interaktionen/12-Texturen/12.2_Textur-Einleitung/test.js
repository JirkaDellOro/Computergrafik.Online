"use strict";
let imgContainer;
let kubusOhne;
let kubusMit;
let sphareOhne;
let sphareMit;
window.addEventListener("load", main);
function main() {
    kubusOhne = document.getElementById("kubusOhne");
    kubusMit = document.getElementById("kubusMit");
    sphareOhne = document.getElementById("sphareOhne");
    sphareMit = document.getElementById("sphareMit");
    imgContainer = document.getElementById("imgcontainer");
    kubusOhne.addEventListener("change", changeState);
    kubusMit.addEventListener("change", changeState);
    sphareOhne.addEventListener("change", changeState);
    sphareMit.addEventListener("change", changeState);
    changeState();
}
// function load(): void {
//     changeState();
// }
function changeState() {
    if (kubusOhne.checked == true)
        imgContainer.style.backgroundImage = "url('img/KubusWoTexture.jpeg')";
    if (kubusMit.checked == true)
        imgContainer.style.backgroundImage = "url('img/KubusWiTexture.jpeg')";
    if (sphareOhne.checked == true)
        imgContainer.style.backgroundImage = "url('img/SphareWoTexture.jpeg')";
    if (sphareMit.checked == true)
        imgContainer.style.backgroundImage = "url('img/SphareWiTexture.jpeg')";
}
//# sourceMappingURL=test.js.map