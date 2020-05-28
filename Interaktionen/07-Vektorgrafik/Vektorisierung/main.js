"use strict";
var CO070_;
(function (CO070_) {
    let show;
    function init() {
        show = document.getElementById("10");
        show.style.cssText = "display:block;";
        let input = document.getElementsByClassName("slider-container")[0];
        input.addEventListener("input", update);
    }
    function update(_event) {
        let input = document.getElementsByClassName("slider");
        let id = "" + (input[0].value) + (input[1].value) + "";
        let showNew = document.getElementById(id);
        showNew.style.cssText = "display:block;";
        show.style.cssText = "display:hide;";
        show = showNew;
    }
    window.addEventListener("load", init);
})(CO070_ || (CO070_ = {}));
//# sourceMappingURL=main.js.map