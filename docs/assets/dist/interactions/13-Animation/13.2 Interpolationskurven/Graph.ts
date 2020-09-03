namespace interpolationskurven {
    export class Graph {

        x: number = 0;
        y: number = 130;
        height: number = 200;
        width: number = 200;

        draw(): void {

            crc2.fillStyle = "#fff";
            crc2.fillRect(this.x, this.y, this.width, this.height);

            crc2.strokeStyle = '#333';
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 1.5, this.y - 0.5);
            crc2.lineTo(this.x + 1.5, this.y - 0.5 +this.height);
            crc2.lineTo(this.width - 1, this.y - 0.5 + this.height);
            crc2.stroke();
            //crc2.strokeRect(this.x + 0.5, this.y - 0.5, this.width - 1, this.height);
        }
    }

}
