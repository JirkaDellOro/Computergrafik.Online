"use strict";
var Transformations;
(function (Transformations) {
    let transX = 0;
    let posX = 0;
    let transY = 0;
    let posY = 0;
    let skX = 0;
    let skewedX = 0;
    let skY = 0;
    let skewedY = 0;
    let totation = 0;
    let rotated = 0;
    let positions = { 0: "translate", 1: "skew", 2: "rotation" };
    let order = { "translate": 0, "skew": 1, "rotation": 2 };
    let img;
    function main() {
        img = document.querySelector("img");
        let inputX = document.getElementById("translateX");
        inputX.addEventListener("input", translateX);
        let inputY = document.getElementById("translateY");
        inputY.addEventListener("input", translateY);
        let skewInpX = document.getElementById("skewX");
        skewInpX.addEventListener("input", skewX);
        let skewInpY = document.getElementById("skewY");
        skewInpY.addEventListener("input", skewY);
        let rotation = document.getElementById("rotate");
        rotation.addEventListener("input", rotate);
        let leftArrows = document.getElementsByClassName("left");
        for (let i = 0; i < leftArrows.length; i++) {
            leftArrows[i].addEventListener("click", moveLeft);
        }
        let rightArrows = document.getElementsByClassName("right");
        for (let i = 0; i < rightArrows.length; i++) {
            rightArrows[i].addEventListener("click", moveRight);
        }
    }
    //change order of transformation and the order the HTML elements are displayed
    function moveLeft(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        let category = parent.getAttribute("id");
        let position = order[category];
        let newPosition = order[category] - 1;
        if (newPosition >= 0) {
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
    function moveRight(_event) {
        let target = _event.target;
        let parent = target.parentNode;
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
            case "skew":
                result += "skew(" + skewedX + "deg," + skewedY + "deg)";
                break;
            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }
        switch (positions[1]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;
            case "skew":
                result += "skew(" + skewedX + "deg," + skewedY + "deg)";
                break;
            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }
        switch (positions[2]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;
            case "skew":
                result += "skew(" + skewedX + "deg," + skewedY + "deg)";
                break;
            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }
        result += "rotate(" + rotated + "deg)";
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
    function skewX(_e) {
        let x = Number(_e.target.value);
        skewedX = skX - x;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    function skewY(_e) {
        let y = Number(_e.target.value);
        skewedY = skY + y;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    function rotate(_e) {
        let rot = Number(_e.target.value);
        rotated = totation + rot;
        let transform = getTransformation();
        img.style.transform = transform;
    }
    document.addEventListener("DOMContentLoaded", main);
})(Transformations || (Transformations = {}));
//# sourceMappingURL=main.js.map