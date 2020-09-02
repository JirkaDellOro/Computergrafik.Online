namespace Meshes {
    export class Lines  {
        edgeOne: Edges;
        edgeTwo: Edges;

        constructor(_e1: Edges, _e2: Edges) {
            this.edgeOne = _e1;
            this.edgeTwo = _e2;
        }

        draw(): void {
            console.log("zeichen kreis");
            cr2.beginPath();
            cr2.save();
            cr2.moveTo(this.edgeOne.position.x, this.edgeOne.position.y);
            cr2.lineTo(this.edgeTwo.position.x, this.edgeTwo.position.y);
            cr2.fillStyle = "#black";
            cr2.lineWidth = 5;
            cr2.stroke();
            cr2.closePath();
            cr2.restore();
        }
    }
}