namespace interpolationskurven {
    export class Graph {

        x: number = 0;
        y: number = 130;
        height: number = 200;
        width: number = 200;

        draw(): void {

            crc2.fillStyle = "#fff";
            crc2.fillRect(this.x, this.y, this.width, this.height);

            // the 0.5 offset is to account for stroke width to make lines sharp
            crc2.strokeStyle = '#333';
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 0.5, this.y - 0.5);
            crc2.lineTo(this.x + 0.5, this.y - 0.5 +this.height);
            crc2.lineTo(this.width - 1, this.y - 0.5 + this.height);
            //crc2.strokeRect(this.x + 0.5, this.y - 0.5, this.width - 1, this.height);
            crc2.stroke();

        }
    }

}
