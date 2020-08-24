namespace kurvenSplines {
    export class Handle {

        x:number;
        y:number;
        width:number = 12;
        height:number = 12;
        left:number;
        right:number;
        top:number;
        bottom:number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        getSides():void {
            this.left = this.x - (this.width / 2);
            this.right = this.left + this.width;
            this.top = this.y - (this.height / 2);
            this.bottom = this.top + this.height;
        }

        draw():void {
            this.getSides();
            crc2.fillStyle = "#222";
            crc2.fillRect(this.left, this.top, this.width, this.height)
        }
    }
}