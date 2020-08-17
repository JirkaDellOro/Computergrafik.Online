"use strict";
var interpolationskurven;
(function (interpolationskurven) {
    class Graph {
        constructor() {
            this.x = 0;
            this.y = 130;
            this.height = 200;
            this.width = 200;
        }
        draw() {
            interpolationskurven.crc2.fillStyle = "#fff";
            interpolationskurven.crc2.fillRect(this.x, this.y, this.width, this.height);
            // the 0.5 offset is to account for stroke width to make lines sharp
            interpolationskurven.crc2.strokeStyle = '#333';
            interpolationskurven.crc2.lineWidth = 1;
            interpolationskurven.crc2.moveTo(this.x + 0.5, this.y - 0.5);
            interpolationskurven.crc2.lineTo(this.x + 0.5, this.y - 0.5 + this.height);
            interpolationskurven.crc2.lineTo(this.width - 1, this.y - 0.5 + this.height);
            //crc2.strokeRect(this.x + 0.5, this.y - 0.5, this.width - 1, this.height);
            interpolationskurven.crc2.stroke();
        }
    }
    interpolationskurven.Graph = Graph;
})(interpolationskurven || (interpolationskurven = {}));
//# sourceMappingURL=Graph.js.map