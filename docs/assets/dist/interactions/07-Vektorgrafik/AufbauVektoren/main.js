"use strict";
var aufbauVektoren;
(function (aufbauVektoren) {
    let canvas;
    let ctx;
    let lineWidth = 5;
    let r = 0;
    let g = 0;
    let b = 0;
    let prvR = 0;
    let prvG = 0;
    let prvB = 0;
    let squareSelected = true;
    let prevFillingStyle;
    let prevLineWidth = 5;
    let inputRed;
    let inputGreen;
    let inputBlue;
    let inputLine;
    function main() {
        inputRed = document.getElementById("red");
        inputGreen = document.getElementById("green");
        inputBlue = document.getElementById("blue");
        inputLine = document.getElementById("line");
        canvas = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        prevFillingStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.beginPath();
        ctx.moveTo(200, 100);
        ctx.lineTo(250, 175);
        ctx.lineTo(150, 175);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(100, 150);
        ctx.lineTo(200, 150);
        ctx.lineTo(200, 250);
        ctx.lineTo(100, 250);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        document.getElementById("controls").addEventListener("input", update);
    }
    function update(_e) {
        let target = _e.target.getAttribute("id");
        let value = Number(_e.target.value);
        switch (target) {
            case "red":
                r = value;
                break;
            case "green":
                g = value;
                break;
            case "blue":
                b = value;
                break;
            case "line":
                lineWidth = value;
                break;
            case "triangle":
                squareSelected = false;
                setValues();
                break;
            case "square":
                squareSelected = true;
                setValues();
                break;
        }
        draw();
    }
    function setValues() {
        inputRed.value = prvR + "";
        inputGreen.value = prvG + "";
        inputBlue.value = prvB + "";
        inputLine.value = prevLineWidth + "";
        prevFillingStyle = "rgb(" + r + "," + g + "," + b + ")";
        prvR = r;
        prvG = g;
        prvB = b;
        prevLineWidth = lineWidth;
        r = Number(inputRed.value);
        g = Number(inputGreen.value);
        b = Number(inputBlue.value);
        lineWidth = Number(inputLine.value);
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (squareSelected) {
            ctx.fillStyle = prevFillingStyle;
            ctx.lineWidth = prevLineWidth;
        }
        else {
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.lineWidth = lineWidth;
        }
        ctx.beginPath();
        ctx.moveTo(200, 100);
        ctx.lineTo(250, 175);
        ctx.lineTo(150, 175);
        ctx.closePath();
        if (!squareSelected && lineWidth != 0) {
            ctx.stroke();
        }
        else if (squareSelected && prevLineWidth != 0) {
            ctx.stroke();
        }
        ctx.fill();
        if (!squareSelected) {
            ctx.fillStyle = prevFillingStyle;
            ctx.lineWidth = prevLineWidth;
        }
        else {
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.lineWidth = lineWidth;
            console.log("else");
        }
        ctx.beginPath();
        ctx.moveTo(100, 150);
        ctx.lineTo(200, 150);
        ctx.lineTo(200, 250);
        ctx.lineTo(100, 250);
        ctx.closePath();
        if (squareSelected && lineWidth != 0) {
            ctx.stroke();
        }
        else if (!squareSelected && prevLineWidth != 0) {
            ctx.stroke();
        }
        ctx.fill();
    }
    window.addEventListener("load", main);
})(aufbauVektoren || (aufbauVektoren = {}));
//# sourceMappingURL=main.js.map