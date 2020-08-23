"use strict";
var kurvenSplines;
(function (kurvenSplines) {
    class Handle {
        constructor(_x, _y) {
            this.width = 12;
            this.height = 12;
            this.x = _x;
            this.y = _y;
        }
        getSides() {
            this.left = this.x - (this.width / 2);
            this.right = this.left + this.width;
            this.top = this.y - (this.height / 2);
            this.bottom = this.top + this.height;
        }
        draw() {
            this.getSides();
            kurvenSplines.crc2.fillStyle = "#222";
            kurvenSplines.crc2.fillRect(this.left, this.top, this.width, this.height);
        }
    }
    kurvenSplines.Handle = Handle;
})(kurvenSplines || (kurvenSplines = {}));
//# sourceMappingURL=Handle.js.map