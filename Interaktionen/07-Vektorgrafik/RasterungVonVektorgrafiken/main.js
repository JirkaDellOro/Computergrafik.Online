"use strict";
var CO070602;
(function (CO070602) {
    let canvas = document.getElementsByTagName("canvas")[0];
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ABEDBE';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    // first without filter
    ctx.fillText('no filter', 60, 20);
    drawArc();
    drawTriangle();
    // then with filter
    ctx.setTransform(1, 0, 0, 1, 120, 0);
    ctx.filter = 'url(#remove-alpha)';
    // and do the same ops
    ctx.fillText('no alpha', 60, 20);
    drawArc();
    drawTriangle();
    // to remove the filter
    ctx.filter = 'none';
    function drawArc() {
        ctx.beginPath();
        ctx.arc(60, 80, 50, 0, Math.PI * 2);
        ctx.stroke();
    }
    function drawTriangle() {
        ctx.beginPath();
        ctx.moveTo(60, 150);
        ctx.lineTo(110, 230);
        ctx.lineTo(10, 230);
        ctx.closePath();
        ctx.stroke();
    }
    // unrelated
    // simply to show a zoomed-in version
    var zCtx = zoomed.getContext('2d');
    zCtx.imageSmoothingEnabled = false;
    canvas.onmousemove = function drawToZoommed(e) {
        var x = e.pageX - this.offsetLeft, y = e.pageY - this.offsetTop, w = this.width, h = this.height;
        zCtx.clearRect(0, 0, w, h);
        zCtx.drawImage(this, x - w / 6, y - h / 6, w, h, 0, 0, w * 3, h * 3);
    };
})(CO070602 || (CO070602 = {}));
//# sourceMappingURL=main.js.map