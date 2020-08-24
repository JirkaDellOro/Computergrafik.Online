namespace aufbauVektoren {
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    let lineWidth: number = 5;
    let r: number = 0;
    let g: number = 0;
    let b: number = 0;


    let prvR: number = 0;
    let prvG: number = 0;
    let prvB: number = 0;

    let squareSelected: boolean = true;
    let prevFillingStyle: string;
    let prevLineWidth: number = 5;

    let inputRed: HTMLInputElement;
    let inputGreen: HTMLInputElement;
    let inputBlue: HTMLInputElement;
    let inputLine: HTMLInputElement;

    function main(): void {
        inputRed = <HTMLInputElement>document.getElementById("red");
        inputGreen = <HTMLInputElement>document.getElementById("green");
        inputBlue = <HTMLInputElement>document.getElementById("blue");
        inputLine = <HTMLInputElement>document.getElementById("line");
        canvas = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        prevFillingStyle = "rgb(" + r + "," + g + "," + b + ")";

        ctx.beginPath();
        ctx.moveTo(200, 100);
        ctx.lineTo(250, 175);
        ctx.lineTo(150, 175);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(100, 150);
        ctx.lineTo(200, 150);
        ctx.lineTo(200, 250);
        ctx.lineTo(100, 250);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        document.getElementById("controls").addEventListener("input", update);

    }

    function update(_e: Event): void {

        let target: string = (<HTMLInputElement>_e.target).getAttribute("id");
        let value: number = Number((<HTMLInputElement>_e.target).value);

        switch (target) {
            case "red":
                r = value;
                break;
            case "green":
                g = value;
                break;
            case "blue":
                b = value;
                break;
            case "line":
                lineWidth = value;
                break;
            case "triangle":
                squareSelected = false;
                setValues();
                break;
            case "square":
                squareSelected = true;
                setValues();
                break;
        }

        draw();
    }

    function setValues(): void {
        inputRed.value = prvR + "";
        inputGreen.value = prvG + "";
        inputBlue.value = prvB + "";
        inputLine.value = prevLineWidth + "";
        
        prevFillingStyle = "rgb(" + r + "," + g + "," + b + ")";
        prvR = r;
        prvG = g;
        prvB = b;
        prevLineWidth = lineWidth;

        r = Number(inputRed.value);
        g = Number(inputGreen.value);
        b = Number(inputBlue.value);
        lineWidth = Number(inputLine.value);
    }


    function draw(): void {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (squareSelected) {
            ctx.fillStyle = prevFillingStyle;
            ctx.lineWidth = prevLineWidth;
        } else {
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.lineWidth = lineWidth;
        }

        ctx.beginPath();
        ctx.moveTo(200, 100);
        ctx.lineTo(250, 175);
        ctx.lineTo(150, 175);
        ctx.closePath();
        if (!squareSelected && lineWidth != 0) {
            ctx.stroke();
        } else if (squareSelected && prevLineWidth != 0) {
            ctx.stroke();
        }
        ctx.fill();


        if (!squareSelected) {
            ctx.fillStyle = prevFillingStyle;
            ctx.lineWidth = prevLineWidth;
        } else {
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.lineWidth = lineWidth;
            console.log("else");
        }

        ctx.beginPath();
        ctx.moveTo(100, 150);
        ctx.lineTo(200, 150);
        ctx.lineTo(200, 250);
        ctx.lineTo(100, 250);
        ctx.closePath();
        if (squareSelected && lineWidth != 0) {
            ctx.stroke();
        } else if (!squareSelected && prevLineWidth != 0) {
            ctx.stroke();
        }
        ctx.fill();
    }

    window.addEventListener("load", main);

}