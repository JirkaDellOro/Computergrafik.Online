"use strict";
var Meshes;
(function (Meshes) {
    class Lines {
        constructor(_e1, _e2) {
            this.edgeOne = _e1;
            this.edgeTwo = _e2;
        }
        draw() {
            console.log("zeichen kreis");
            Meshes.cr2.beginPath();
            Meshes.cr2.save();
            Meshes.cr2.moveTo(this.edgeOne.position.x, this.edgeOne.position.y);
            Meshes.cr2.lineTo(this.edgeTwo.position.x, this.edgeTwo.position.y);
            Meshes.cr2.fillStyle = "#black";
            Meshes.cr2.lineWidth = 5;
            Meshes.cr2.stroke();
            Meshes.cr2.closePath();
            Meshes.cr2.restore();
        }
    }
    Meshes.Lines = Lines;
})(Meshes || (Meshes = {}));
//# sourceMappingURL=line.js.map