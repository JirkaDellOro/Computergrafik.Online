"use strict";
var interpolationskurven;
(function (interpolationskurven) {
    var Graph = /** @class */ (function () {
        function Graph() {
            this.x = 0;
            this.y = 130;
            this.height = 200;
            this.width = 200;
        }
        Graph.prototype.draw = function () {
            interpolationskurven.crc2.fillStyle = "#fff";
            interpolationskurven.crc2.fillRect(this.x, this.y, this.width, this.height);
            interpolationskurven.crc2.strokeStyle = '#333';
            interpolationskurven.crc2.lineWidth = 2;
            interpolationskurven.crc2.beginPath();
            interpolationskurven.crc2.moveTo(this.x + 1.5, this.y - 0.5);
            interpolationskurven.crc2.lineTo(this.x + 1.5, this.y - 0.5 + this.height);
            interpolationskurven.crc2.lineTo(this.width - 1, this.y - 0.5 + this.height);
            interpolationskurven.crc2.stroke();
            //crc2.strokeRect(this.x + 0.5, this.y - 0.5, this.width - 1, this.height);
        };
        return Graph;
    }());
    interpolationskurven.Graph = Graph;
})(interpolationskurven || (interpolationskurven = {}));
