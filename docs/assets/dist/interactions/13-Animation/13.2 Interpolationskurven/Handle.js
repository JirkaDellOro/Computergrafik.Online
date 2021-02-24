"use strict";
var interpolationskurven;
(function (interpolationskurven) {
    var Handle = /** @class */ (function () {
        function Handle(_x, _y) {
            this.width = 12;
            this.height = 12;
            this.x = _x;
            this.y = _y;
        }
        Handle.prototype.getSides = function () {
            this.left = this.x - (this.width / 2);
            this.right = this.left + this.width;
            this.top = this.y - (this.height / 2);
            this.bottom = this.top + this.height;
        };
        Handle.prototype.draw = function () {
            this.getSides();
            interpolationskurven.crc2.fillStyle = "#222";
            interpolationskurven.crc2.fillRect(this.left, this.top, this.width, this.height);
        };
        return Handle;
    }());
    interpolationskurven.Handle = Handle;
})(interpolationskurven || (interpolationskurven = {}));
