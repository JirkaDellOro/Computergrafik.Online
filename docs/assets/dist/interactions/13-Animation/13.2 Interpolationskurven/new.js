"use strict";
/* */
var interpolationskurven;
/* */
(function (interpolationskurven) {
    let handleInUse;
    let canvas;
    function main() {
        canvas = document.getElementById('curve');
        interpolationskurven.crc2 = canvas.getContext('2d');
        let box = document.getElementById('box'), supportsTouch = ('createTouch' in document);
        let timeVal = 700;
        var supportsBezierRange = (function () {
            var el = document.createElement('div');
            el.style.webkitTransitionTimingFunction = 'cubic-bezier(1,0,0,1.1)';
            return !!el.style.webkitTransitionTimingFunction.length;
        })();
        let handles = [
            new interpolationskurven.Handle(50, 180),
            new interpolationskurven.Handle(150, 180)
        ];
        let graph = new interpolationskurven.Graph();
        function getPos(event) {
            let mouseX = event.pageX - getOffSet(event.target).left;
            let mouseY = event.pageY - getOffSet(event.target).top;
            return {
                x: mouseX,
                y: mouseY
            };
        }
        function getOffSet(obj) {
            let curleft = 0;
            let curtop = 0;
            if (obj.offsetParent) {
                do {
                    curleft += obj.offsetLeft;
                    curtop += obj.offsetTop;
                } while (obj = obj.offsetParent);
                return {
                    left: curleft,
                    top: curtop
                };
            }
        }
        function onPress(event) {
            event.preventDefault();
            event.stopPropagation(); //not sure if this is needed
            var cursorEvent = supportsTouch ? event.touches[0] : event;
            var mouseCoordinates = getPos(cursorEvent), x = mouseCoordinates.x, y = mouseCoordinates.y;
            //check to see if over any handles
            for (var i = 0; i < handles.length; i++) {
                var current = handles[i], curLeft = current.left, curRight = current.right, curTop = current.top, curBottom = current.bottom;
                //20 px padding for chubby fingers
                if (supportsTouch) {
                    curLeft -= 20;
                    curRight += 20;
                    curTop -= 20;
                    curBottom += 20;
                }
                if (x >= curLeft &&
                    x <= curRight &&
                    y >= curTop &&
                    y <= curBottom) {
                    handleInUse = current;
                    let selected = document.querySelector('input[type="radio"]:checked');
                    selected.checked = false;
                    let custom = document.querySelectorAll('#options input[type="radio"]');
                    custom[custom.length - 1].checked = true;
                    document.addEventListener('mouseup', onRelease, false);
                    document.addEventListener('touchend', touchEnd, false);
                    document.addEventListener('mousemove', onMove, false);
                    document.addEventListener('touchmove', touchMove, false);
                }
            }
        }
        function onMove(event) {
            var cursorEvent = supportsTouch ? event.touches[0] : event;
            var x = cursorEvent.pageX - getOffSet(canvas).left, y = cursorEvent.pageY - getOffSet(canvas).top;
            if (x > graph.width) {
                x = graph.width;
            }
            if (x < 0) {
                x = 0;
            }
            if (y > canvas.height) {
                y = canvas.height;
            }
            if (y < 0) {
                y = 0;
            }
            handleInUse.x = x;
            handleInUse.y = y;
            updateDrawing();
        }
        function touchMove(event) {
            onMove(event);
            event.preventDefault();
        }
        function onRelease() {
            document.removeEventListener('mousemove', onMove, false);
            document.removeEventListener('touchmove', touchMove, false);
            document.removeEventListener('mouseup', onRelease, false);
            document.removeEventListener('touchend', touchEnd, false);
        }
        function touchEnd(event) {
            onRelease();
            event.preventDefault();
        }
        canvas.addEventListener('mousedown', onPress, false);
        canvas.addEventListener('touchstart', function touchPress(event) {
            onPress(event);
            event.preventDefault();
        }, false);
        function updateDrawing() {
            interpolationskurven.crc2.clearRect(0, 0, canvas.width, canvas.height);
            // draw graph
            graph.draw();
            // get handles
            var cp1 = handles[0], cp2 = handles[1];
            // draw bezier curve
            interpolationskurven.crc2.save();
            interpolationskurven.crc2.strokeStyle = '#4C84D3';
            interpolationskurven.crc2.lineWidth = 3;
            interpolationskurven.crc2.beginPath();
            interpolationskurven.crc2.moveTo(graph.x, graph.y + graph.height);
            //start at bottom left, first handle is cp1, second handle is cp2, end is top right
            interpolationskurven.crc2.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, graph.width, graph.y);
            interpolationskurven.crc2.stroke();
            interpolationskurven.crc2.restore();
            // draw anchor point lines
            interpolationskurven.crc2.strokeStyle = '#f00';
            interpolationskurven.crc2.beginPath();
            interpolationskurven.crc2.moveTo(graph.x, graph.y + graph.height);
            interpolationskurven.crc2.lineTo(cp1.x, cp1.y);
            interpolationskurven.crc2.moveTo(graph.width, graph.y);
            interpolationskurven.crc2.lineTo(cp2.x, cp2.y);
            interpolationskurven.crc2.stroke();
            for (var i = 0; i < handles.length; i++) {
                handles[i].draw();
            }
        }
        function setTransitions() {
            let cp1 = handles[0], cp2 = handles[1];
            let x1 = (cp1.x / graph.width).toFixed(3), y1 = ((graph.height + graph.y - cp1.y) / graph.height).toFixed(3), x2 = (cp2.x / canvas.width).toFixed(3), y2 = ((graph.height + graph.y - cp2.y) / graph.height).toFixed(3), points = '(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')';
            box.style.webkitTransition =
                box.style.transition =
                    'all ' + timeVal + 'ms cubic-bezier' + points;
            if (!supportsBezierRange) {
                let wy1, wy2;
                if (Number(y1) > 1)
                    wy1 = 1;
                if (Number(y1) < 0)
                    wy1 = 0;
                if (Number(y2) > 1)
                    wy2 = 1;
                if (Number(y2) < 0)
                    wy2 = 0;
                box.style.webkitTransition = 'all ' + timeVal + 'ms cubic-bezier' + '(' + x1 + ', ' + wy1 + ', ' + x2 + ', ' + wy2 + ')';
            }
        }
        function presetChange() {
            let selected = document.querySelector('input[type="radio"]:checked');
            let coordinates = selected.value.split(','), cp1 = handles[0], cp2 = handles[1];
            cp1.x = Number(coordinates[0]) * graph.width;
            cp1.y = graph.y + graph.height - (Number(coordinates[1]) * graph.height);
            cp2.x = Number(coordinates[2]) * graph.width;
            cp2.y = graph.y + graph.height - (Number(coordinates[3]) * graph.height);
            updateDrawing();
        }
        var options = document.getElementById("options");
        options.addEventListener("input", presetChange);
        let set = true;
        let startButton = document.querySelector(".testButton");
        console.log(startButton);
        startButton.addEventListener("mousedown", setTweenClass);
        function setTweenClass() {
            setTransitions();
            let box = document.querySelector("#box");
            if (set) {
                box.classList.add("tween");
                set = false;
            }
            else if (!set) {
                box.classList.remove("tween");
                set = true;
            }
            startMovement();
        }
        function startMovement() {
            document.getElementById("helper").style.display = "block";
            document.getElementById("helper").style.animation = "helper 700ms";
            setTimeout(function () {
                document.getElementById("helper").style.display = "none";
                document.getElementById("helper").style.animation = "";
            }, 700);
        }
        setTransitions();
        presetChange();
    }
    window.addEventListener("load", main);
})(interpolationskurven || (interpolationskurven = {}));
//# sourceMappingURL=new.js.map