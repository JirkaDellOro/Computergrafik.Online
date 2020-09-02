namespace Meshes {
    export class Edges {
        position: Vector;


        constructor(_pos: Vector) {
            this.position = _pos;
        }

        draw(): void {
            console.log("zeichen kreis");
            cr2.beginPath();
            cr2.save();
            cr2.translate(this.position.x, this.position.y);
            cr2.fillStyle = "#49E2E1";
            cr2.lineWidth = 5;
            cr2.strokeStyle = "black";
            cr2.arc(0, 0, 10, 0, 2 * Math.PI);
            cr2.stroke();
            cr2.fill();
            cr2.restore();
        }


        isHit(_hotspot: Vector): boolean {
            let hitsize: number = 32;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);

        }
        changePos(_pos: Vector): void {
            this.position = _pos;
        }
    }
}