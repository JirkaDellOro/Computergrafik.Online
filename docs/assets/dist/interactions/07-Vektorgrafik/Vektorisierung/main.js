var CO070_;
(function (CO070_) {
    var show;
    function init() {
        show = document.getElementById("10");
        show.style.cssText = "display:block;";
        var input = document.getElementsByClassName("slider-container")[0];
        input.addEventListener("input", update);
    }
    function update(_event) {
        var input = document.getElementsByClassName("slider");
        var id = "" + (input[0].value) + (input[1].value) + "";
        var showNew = document.getElementById(id);
        showNew.style.cssText = "display:block;";
        show.style.cssText = "display:hide;";
        show = showNew;
    }
    window.addEventListener("load", init);
})(CO070_ || (CO070_ = {}));
