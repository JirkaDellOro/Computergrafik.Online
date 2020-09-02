"use strict";
var Meshes;
(function (Meshes) {
    class Edges {
        constructor(_pos) {
            this.position = _pos;
        }
        draw() {
            console.log("zeichen kreis");
            Meshes.cr2.beginPath();
            Meshes.cr2.save();
            Meshes.cr2.translate(this.position.x, this.position.y);
            Meshes.cr2.fillStyle = "#49E2E1";
            Meshes.cr2.lineWidth = 5;
            Meshes.cr2.strokeStyle = "black";
            Meshes.cr2.arc(0, 0, 10, 0, 2 * Math.PI);
            Meshes.cr2.stroke();
            Meshes.cr2.fill();
            Meshes.cr2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 32;
            let difference = new Meshes.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
        changePos(_pos) {
            this.position = _pos;
        }
    }
    Meshes.Edges = Edges;
})(Meshes || (Meshes = {}));
//# sourceMappingURL=edges.js.map