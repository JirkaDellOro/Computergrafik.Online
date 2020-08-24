"use strict";
var Transformations;
(function (Transformations) {
    let transX = 0;
    let posX = 0;
    let transY = 0;
    let posY = 0;
    let scaleingX = 1;
    let scaleingY = 1;
    let totation = 0;
    let rotated = 0;
    let positions = { 0: "translate", 1: "scale", 2: "rotation" };
    let order = { "translate": 0, "scale": 1, "rotation": 2 };
    let img;
    function main() {
        img = document.querySelectorAll("img")[1];
        let inputX = document.getElementById("translateX");
        inputX.addEventListener("input", translateX);
        let inputY = document.getElementById("translateY");
        inputY.addEventListener("input", translateY);
        let scaleInpX = document.getElementById("scaleX");
        scaleInpX.addEventListener("input", scaleX);
        let scaleInpY = document.getElementById("scaleY");
        scaleInpY.addEventListener("input", scaleY);
        let rotation = document.getElementById("rotate");
        rotation.addEventListener("input", rotate);
        let reset = document.getElementById("reset");
        reset.addEventListener("click", clear);
        let arrows = document.getElementsByClassName("arows");
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].addEventListener("click", moveControl);
        }
    }
    //change order of transformation and the order the HTML elements are displayed
    function moveControl(_event) {
        let target = _event.currentTarget;
        let parent = target.parentNode.parentNode;
        //right
        let category = parent.getAttribute("id");
        let position = order[category];
        let newPosition = order[category] + 1;
        if (newPosition <= 2) {
            parent.style.order = "" + newPosition;
            let move = positions[newPosition];
            order[category] = newPosition;
            order[move] = position;
            positions[newPosition] = category;
            positions[position] = move;
            let moveParent = document.getElementById(move);
            moveParent.style.order = "" + position;
            let transform = getTransformation();
            img.style.transform = transform;
        }
    }
    //get order of transformation
    function getTransformation() {
        //write new variabel for transform(css)
        let result = "";
        switch (positions[0]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;
            case "scale":
                result += "scale(" + scaleingX + "," + scaleingY + ")";
                break;
            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }
        switch (positions[1]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;
            case "scale":
                result += "scale(" + scaleingX + "," + scaleingY + ")";
                break;
            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }
        switch (positions[2]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;
            case "scale":
                result += "scale(" + scaleingX + "," + scaleingY + ")";
                break;
            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }
        //result += "rotate(" + rotated + "deg)";
        return result;
    }
    //update transform values
    function translateX(_e) {
        let x = Number(_e.target.value);
        posX = transX + x;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    function translateY(_e) {
        let y = Number(_e.target.value);
        posY = transY - y;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    function scaleX(_e) {
        let x = Number(_e.target.value);
        scaleingX = x;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    function scaleY(_e) {
        let y = Number(_e.target.value);
        scaleingY = y;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    function rotate(_e) {
        let rot = Number(_e.target.value);
        rotated = totation + rot;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    function clear() {
        posX = 0;
        posY = 0;
        scaleingX = 1;
        scaleingX = 1;
        rotated = 0;
        let transform = getTransformation();
        img.style.transform = transform;
        positions = { 0: "translate", 1: "scale", 2: "rotation" };
        order = { "translate": 0, "scale": 1, "rotation": 2 };
        document.getElementById("translate").style.order = "0";
        document.getElementById("scale").style.order = "1";
        document.getElementById("rotation").style.order = "2";
        let inputX = document.getElementById("translateX");
        inputX.value = "0";
        let inputY = document.getElementById("translateY");
        inputY.value = "0";
        let scaleInpX = document.getElementById("scaleX");
        scaleInpX.value = "1";
        let scaleInpY = document.getElementById("scaleY");
        scaleInpY.value = "1";
        let rotation = document.getElementById("rotate");
        rotation.value = "0";
    }
    document.addEventListener("DOMContentLoaded", main);
})(Transformations || (Transformations = {}));
//# sourceMappingURL=main.js.map