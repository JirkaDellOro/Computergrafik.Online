var canvas = document.getElementById('curve'),
    crc2 = canvas.getContext('2d'),
    box = document.getElementById('box'),
    supportsTouch = ('createTouch' in document),
    timeVal = 700;


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
    new BezierHandle(150, 180)
];

function Graph() {
    this.x = 0;
    this.y = 130;
    this.height = 200;
    this.width = 200;
}

Graph.prototype = {

    draw: function () {

        crc2.fillStyle = "#fff";
        crc2.fillRect(this.x, this.y, this.width, this.height);

        // the 0.5 offset is to account for stroke width to make lines sharp
        crc2.strokeStyle = '#666';
        crc2.lineWidth = 1;
        crc2.strokeRect(this.x + 0.5, this.y - 0.5, this.width - 1, this.height);

    }

};

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


            let selected = document.querySelector('input[type="radio"]:checked');
            console.log(selected);
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
    // draw graph
    graph.draw();
    // get handles
    var cp1 = handles[0],
        cp2 = handles[1];
    // draw bezier curve
    crc2.save();
    crc2.strokeStyle = '#4C84D3';
    crc2.lineWidth = 3;
    crc2.beginPath();
    crc2.moveTo(graph.x, graph.y + graph.height);
    //start at bottom left, first handle is cp1, second handle is cp2, end is top right
    crc2.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, graph.width, graph.y);
    crc2.stroke();
    crc2.restore();
    // draw anchor point lines
    crc2.strokeStyle = '#f00';
    crc2.beginPath();
    crc2.moveTo(graph.x, graph.y + graph.height);
    crc2.lineTo(cp1.x, cp1.y);
    crc2.moveTo(graph.width, graph.y);
    crc2.lineTo(cp2.x, cp2.y);
    crc2.stroke();

    for (var i = 0; i < handles.length; i++) {
        handles[i].draw();
    }
}

function setTransitions() {

    var cp1 = handles[0],
        cp2 = handles[1];

    var x1 = (cp1.x / graph.width).toFixed(3),
        y1 = ((graph.height + graph.y - cp1.y) / graph.height).toFixed(3),
        x2 = (cp2.x / canvas.width).toFixed(3),
        y2 = ((graph.height + graph.y - cp2.y) / graph.height).toFixed(3),

        points = '(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')';


    box.style.WebkitTransition =
        box.style.MozTransition =
        box.style.MsTransition =
        box.style.OTransition =
        box.style.transition =
        'all ' + timeVal + 'ms cubic-bezier' + points;

    if (!supportsBezierRange) {

        var wy1, wy2;

        if (y1 > 1) wy1 = 1;
        if (y1 < 0) wy1 = 0;
        if (y2 > 1) wy2 = 1;
        if (y2 < 0) wy2 = 0;

        box.style.WebkitTransition = 'all ' + timeVal + 'ms cubic-bezier' + '(' + x1 + ', ' + wy1 + ', ' + x2 + ', ' + wy2 + ')';
    }
}

function presetChange() {

    let selected = document.querySelector('input[type="radio"]:checked');

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

let set = true;
$('.testButton').click(function () {

    setTransitions();

    let box = document.querySelector("#box");

    if (set) {
        box.classList.add(this.getAttribute("id"));
        set = false;
    } else if (!set) {
        box.classList.remove(this.getAttribute("id"));
        set = true;
    }
    startMovement();
});

function startMovement() {
    console.log("test");
    document.getElementById("helper").style.display = "block";
    document.getElementById("helper").style.animation = "helper 700ms";
    setTimeout(function () {
        document.getElementById("helper").style.display = "none";
        document.getElementById("helper").style.animation = "";
    }, 700);
}

setTransitions();

presetChange()