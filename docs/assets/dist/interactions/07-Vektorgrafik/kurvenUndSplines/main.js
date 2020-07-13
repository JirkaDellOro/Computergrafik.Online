var canvas = document.getElementById('curve'),
    crc2 = canvas.getContext('2d'),
    box = document.getElementById('box'),
    supportsTouch = ('createTouch' in document);

let selected;

var supportsBezierRange = (function () {
    var el = document.createElement('div');
    el.style.WebkitTransitionTimingFunction = 'cubic-bezier(1,0,0,1.1)';
    return !!el.style.WebkitTransitionTimingFunction.length;
})();

// bezier contructor
function BezierHandle(x, y) {
    this.x = x;
    this.y = y;
    this.width = 12;
    this.height = 12;
}

BezierHandle.prototype = {

    // get the edges for easy grabby coordinates
    getSides: function () {
        this.left = this.x - (this.width / 2);
        this.right = this.left + this.width;
        this.top = this.y - (this.height / 2);
        this.bottom = this.top + this.height;
    },

    draw: function () {
        // figure out the edges
        this.getSides();
        crc2.fillStyle = "#222";
        crc2.fillRect(this.left, this.top, this.width, this.height);
    }
};

var handles = [
    new BezierHandle(50, 180),
    new BezierHandle(50, 180)
];

function Graph() {
    this.x = 0;
    this.y = 0;
    this.height = 300;
    this.width = 300;
}

var graph = new Graph();

// get the x and y pos, normalized by getOffset
function getPos(event) {
    var mouseX = event.pageX - getOffSet(event.target).left,
        mouseY = event.pageY - getOffSet(event.target).top;

    return {
        x: mouseX,
        y: mouseY
    };
}



//from quirksmode.org. Modified slightly to return obj
function getOffSet(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
        while (obj = obj.offsetParent);

        return {
            left: curleft,
            top: curtop
        };
    }
}


var drag = false,
    draggingObj,
    oldX,
    oldY;

function onPress(event) {

    event.preventDefault();
    event.stopPropagation(); //not sure if this is needed

    var cursorEvent = supportsTouch ? event.touches[0] : event;

    var mouseCoordinates = getPos(cursorEvent),
        x = mouseCoordinates.x,
        y = mouseCoordinates.y;


    //check to see if over any handles
    for (var i = 0; i < handles.length; i++) {
        var current = handles[i],
            curLeft = current.left,
            curRight = current.right,
            curTop = current.top,
            curBottom = current.bottom;

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
            y <= curBottom
        ) {

            draggingObj = current;
            oldX = event.pageX;
            oldY = event.pageY;


            /*let selected = document.querySelector('input[type="radio"]:checked');
            selected.checked = false;
            let custom = document.querySelectorAll('#options input[type="radio"]');
            custom[custom.length - 1].checked = true;*/


            document.addEventListener('mouseup', onRelease, false);
            document.addEventListener('touchend', touchEnd, false);

            document.addEventListener('mousemove', onMove, false);
            document.addEventListener('touchmove', touchMove, false);

        }
    }
}

function onMove(event) {

    var cursorEvent = supportsTouch ? event.touches[0] : event;

    var x = cursorEvent.pageX - getOffSet(canvas).left,
        y = cursorEvent.pageY - getOffSet(canvas).top;

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

    draggingObj.x = x;
    draggingObj.y = y;

    updateDrawing();
}

function touchMove(event) {
    onMove(event);
    event.preventDefault();
}

function onRelease(event) {
    drag = false;
    document.removeEventListener('mousemove', onMove, false);
    document.removeEventListener('touchmove', touchMove, false);
    document.removeEventListener('mouseup', onRelease, false);
    document.removeEventListener('touchend', touchEnd, false);
}

function touchEnd(event) {
    onRelease(event);
    event.preventDefault();
}

canvas.addEventListener('mousedown', onPress, false);
canvas.addEventListener('touchstart', function touchPress(event) {
    onPress(event);
    event.preventDefault();
}, false);

function updateDrawing() {

    crc2.clearRect(0, 0, canvas.width, canvas.height);

    // get handles
    var cp1 = handles[0],
        cp2 = handles[1];
    // draw bezier curve
    crc2.save();
    crc2.strokeStyle = '#4C84D3';
    crc2.lineWidth = 5;
    crc2.beginPath();
    crc2.moveTo(graph.x, graph.y + graph.height);
    //start at bottom left, first handle is cp1, second handle is cp2, end is top right

    if (selected.getAttribute("id") == "two") {

        crc2.quadraticCurveTo(cp1.x, cp1.y, graph.width, graph.y);

    } else if (selected.getAttribute("id") == "three") {

        crc2.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, graph.width, graph.y);

    } else if (selected.getAttribute("id") == "one") {


        crc2.beginPath();
        crc2.moveTo(cp1.x, cp1.y);
        crc2.lineTo(cp2.x, cp2.y);
    }

    crc2.stroke();
    crc2.restore();
    // draw anchor point lines
    if (selected.getAttribute("id") != "one") {
        
        crc2.strokeStyle = '#f00';
        crc2.beginPath();
        crc2.moveTo(graph.x, graph.y + graph.height);
        crc2.lineTo(cp1.x, cp1.y);
        crc2.moveTo(graph.width, graph.y);
    }

    if (selected.getAttribute("id") == "one") {
        
        crc2.strokeStyle = '#4C84D3';
    }

    if (selected.getAttribute("id") == "two") {

        crc2.lineTo(cp1.x, cp1.y);

    } else {
        crc2.lineTo(cp2.x, cp2.y);
    }

    crc2.stroke();

    if (selected.getAttribute("id") == "two") {

        handles[0].draw();

    } else if (selected.getAttribute("id") == "three" || selected.getAttribute("id") == "one") {

        handles[0].draw();
        handles[1].draw();

    }
}


function presetChange() {

    selected = document.querySelector('input[type="radio"]:checked');

    var coordinates = selected.value.split(','),
        cp1 = handles[0],
        cp2 = handles[1];

    cp1.x = coordinates[0] * graph.width;
    cp1.y = graph.y + graph.height - (coordinates[1] * graph.height);
    cp2.x = coordinates[2] * graph.width;
    cp2.y = graph.y + graph.height - (coordinates[3] * graph.height);

    updateDrawing();
}

var options = document.getElementById("options");
options.addEventListener("input", presetChange);



presetChange()