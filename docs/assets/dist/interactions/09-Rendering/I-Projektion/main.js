"use strict";
var Projektion;
(function (Projektion) {
    let show;
    let input;
    let showImg = "2";
    function init() {
        show = document.getElementById("2");
        console.log(show);
        input = document.querySelectorAll("input");
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener("input", update);
        }
    }
    function update(_event) {
        showImg = _event.target.value;
        console.log(showImg);
        let showNew = document.getElementById(showImg);
        showNew.style.cssText = "display:block;";
        show.style.cssText = "display:none;";
        show = showNew;
    }
    window.addEventListener("load", init);
})(Projektion || (Projektion = {}));
//# sourceMappingURL=main.js.map