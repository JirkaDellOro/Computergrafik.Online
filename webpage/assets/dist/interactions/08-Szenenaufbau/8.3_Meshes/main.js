"use strict";
var Meshes;
(function (Meshes) {
    let edges = [];
    let lines = [];
    let clickEdge;
    let flag = false;
    let flag2 = false;
    let edge2;
    let edge1;
    let clearButton;
    let lineButton;
    let edgeButton;
    window.addEventListener("load", main);
    function main() {
        Meshes.canvas = document.getElementById("can");
        Meshes.canvas.width = window.innerWidth;
        Meshes.canvas.height = window.innerHeight;
        Meshes.cr2 = Meshes.canvas.getContext("2d");
        let backGround = Meshes.cr2.getImageData(0, 0, Meshes.cr2.canvas.width, Meshes.cr2.canvas.height);
        window.setInterval(update, 20, backGround);
        handleLoad();
    }
    function handleLoad() {
        Meshes.canvas.addEventListener("click", paintEdge);
        Meshes.canvas.addEventListener("mousedown", getEdge);
        Meshes.canvas.addEventListener("mouseout", dragEdge);
        window.addEventListener("mouseup", function up() {
            flag2 = false;
        });
        Meshes.canvas.addEventListener("mousedown", dragEdge);
        Meshes.canvas.addEventListener("mousemove", dragEdge);
        // canvas.addEventListener("click", strokeLine);
        Meshes.canvas.addEventListener(`contextmenu`, function (e) {
            e.preventDefault();
        });
        clearButton = document.getElementById("clear");
        clearButton.addEventListener("click", clear);
        lineButton = document.getElementById("lines");
        lineButton.addEventListener("click", linesConne);
        // edgeButton.removeEventListener("click", handleLoad);
        edgeButton.removeEventListener("click", strokeLine);
    }
    function linesConne() {
        edge1 = null;
        edge2 = null;
        Meshes.canvas.addEventListener("click", strokeLine);
        Meshes.canvas.removeEventListener("click", paintEdge);
        Meshes.canvas.removeEventListener("mousemove", dragEdge);
        edgeButton = document.getElementById("edges");
        edgeButton.addEventListener("click", handleLoad);
    }
    function clear() {
        edges = [];
        lines = [];
        edge1 = null;
        edge2 = null;
    }
    function paintEdge(_event) {
        let getClick = new Meshes.Vector(_event.offsetX, _event.offsetY);
        let edge = new Meshes.Edges(getClick);
        let flag = false;
        if (edges.length < 1) {
            edges.push(edge);
            console.log(edges);
            edge.draw();
        }
        edges.forEach(lel => {
            if (lel.isHit(new Meshes.Vector(_event.offsetX, _event.offsetY))) {
                flag = true;
            }
        });
        if (!flag) {
            edges.push(edge);
            console.log(edges);
            edge.draw();
        }
    }
    function getEdge(_event) {
        flag2 = true;
        for (let i = 0; i < edges.length; i++) {
            if (edges[i].isHit(new Meshes.Vector(_event.offsetX, _event.offsetY))) {
                clickEdge = edges[i];
                return edges[i];
            }
        }
        return null;
    }
    function dragEdge(_event) {
        if (event?.type == "mouseup" || event?.type == "mouseout") {
            flag2 = false;
        }
        if (event?.type == "mousemove") {
            if (flag2) {
                clickEdge.changePos(new Meshes.Vector(_event.offsetX, _event.offsetY));
                clickEdge.draw();
            }
        }
    }
    function strokeLine(_event) {
        if (edge1 != null) {
            edge2 = getEdge(_event);
        }
        if (getEdge(_event) != null && edge2 == null) {
            edge1 = getEdge(_event);
        }
        if (edge1 != null && edge2 != null) {
            let line = new Meshes.Lines(edge1, edge2);
            lines.push(line);
            edge1 = null;
            edge2 = null;
        }
        flag2 = false;
    }
    function update(_backgroundData) {
        Meshes.cr2.putImageData(_backgroundData, 0, 0);
        lines.forEach(element => {
            element.draw();
        });
        edges.forEach(element => {
            element.draw();
        });
    }
})(Meshes || (Meshes = {}));
//# sourceMappingURL=main.js.map