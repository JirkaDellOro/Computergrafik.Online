"use strict";
var Antialising;
(function (Antialising) {
    let canvas;
    let ctx;
    let container;
    let target;
    let lines = [];
    let image;
    let zoom = 10;
    let touch = false;
    function main() {
        canvas = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");
        canvas.style.width = "500px";
        canvas.style.height = "400px";
        ctx.lineWidth = 1;
        ctx.lineJoin = "round";
        container = document.getElementById("container");
        container.addEventListener("mousedown", function (_e) {
            if (_e.target.getAttribute("class") == "points") {
                target = _e.target;
                touch = false;
                container.addEventListener("mousemove", movePoint);
            }
        });
        container.addEventListener("touchstart", function (_e) {
            console.log(_e.target);
            if (_e.target.getAttribute("class") == "points") {
                target = _e.target;
                touch = true;
                container.addEventListener("touchmove", movePoint);
            }
        });
        document.addEventListener("mouseup", function () {
            container.removeEventListener("mousemove", movePoint);
        });
        document.addEventListener("touchend", function () {
            container.removeEventListener("touchmove", movePoint);
        });
        let pointOne = document.createElement("div");
        pointOne.setAttribute("id", "pointOne");
        pointOne.setAttribute("class", "points");
        container.appendChild(pointOne);
        lines["pointOne"] = [100 / zoom, 100 / zoom];
        let pointTwo = document.createElement("div");
        pointTwo.setAttribute("id", "pointTwo");
        pointTwo.setAttribute("class", "points");
        container.appendChild(pointTwo);
        lines["pointTwo"] = [400 / zoom, 300 / zoom];
        let pointThree = document.createElement("div");
        pointThree.setAttribute("id", "pointThree");
        pointThree.setAttribute("class", "points");
        container.appendChild(pointThree);
        lines["pointThree"] = [100 / zoom, 300 / zoom];
        if (window.innerWidth < 600) {
            canvas.style.width = "250px";
            canvas.style.height = "200px";
            zoom = 5;
            lines["pointOne"] = [50 / zoom, 50 / zoom];
            lines["pointTwo"] = [200 / zoom, 150 / zoom];
            lines["pointThree"] = [50 / zoom, 150 / zoom];
        }
        canvas.style.imageRendering = "pixelated";
        ctx.filter = "none";
        draw();
        let on = document.getElementById("on");
        let off = document.getElementById("off");
        off.addEventListener("click", function () {
            //canvas.style.imageRendering = "pixelated";
            this.className = "active";
            on.className = "";
            ctx.filter = "url(#remove-alpha)";
            draw();
        });
        on.addEventListener("click", function () {
            //canvas.style.imageRendering = "pixelated";
            this.className = "active";
            off.className = "";
            ctx.filter = "none";
            draw();
        });
    }
    function movePoint(_e) {
        let x;
        let y;
        if (touch) {
            x = _e.changedTouches[0].pageX - container.offsetLeft + (container.offsetWidth / 2);
            y = _e.changedTouches[0].pageY - container.offsetTop;
        }
        else {
            x = _e.pageX - container.offsetLeft + (container.offsetWidth / 2);
            y = _e.pageY - container.offsetTop;
        }
        if (x > (0 + target.offsetWidth / 2) && x < (container.offsetWidth - target.offsetWidth / 2) && y > (0 + target.offsetHeight / 2) && y < (container.offsetHeight - target.offsetHeight / 2)) {
            target.style.cssText = "top:" + y + "px;left:" + x + "px";
            switch (target.id) {
                case "pointOne":
                    lines[target.id] = [x / zoom, y / zoom];
                    break;
                case "pointTwo":
                    lines[target.id] = [x / zoom, y / zoom];
                    break;
                case "pointThree":
                    lines[target.id] = [x / zoom, y / zoom];
                    break;
            }
            draw();
        }
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(lines["pointOne"][0], lines["pointOne"][1]);
        ctx.lineTo(lines["pointTwo"][0], lines["pointTwo"][1]);
        ctx.lineTo(lines["pointThree"][0], lines["pointThree"][1]);
        ctx.lineTo(lines["pointOne"][0], lines["pointOne"][1]);
        ctx.stroke();
        image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(image, 0, 0);
    }
    window.addEventListener("load", main);
})(Antialising || (Antialising = {}));
//# sourceMappingURL=Main.js.map