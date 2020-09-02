"use strict";
var Raytracing;
(function (Raytracing) {
    let imgContainer;
    let toggle;
    window.addEventListener("load", main);
    let normalUrl;
    let displaceUrl;
    function main() {
        toggle = document.getElementById("togBtn");
        imgContainer = document.getElementById("imgcontainer");
        toggle.addEventListener("change", changeState);
        normalUrl = "url('img/ohne.png')";
        displaceUrl = "url('img/mit.png')";
        changeState();
    }
    function changeState() {
        if (toggle.checked == false)
            imgContainer.style.backgroundImage = normalUrl;
        if (toggle.checked == true)
            imgContainer.style.backgroundImage = displaceUrl;
    }
})(Raytracing || (Raytracing = {}));
//# sourceMappingURL=main.js.map