namespace Antialising {
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let container: HTMLDivElement;
    let target: HTMLDivElement;
    let lines: any = [];
    let image: ImageData;
    let zoom: number = 10;
    let touch: boolean = false;

    function main(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.style.width = "500px";
        canvas.style.height = "400px";
      
        ctx.lineWidth = 1;
        ctx.lineJoin = "round";


        container = <HTMLDivElement>document.getElementById("container");

        container.addEventListener("mousedown", function (_e: MouseEvent): void {
            if ((<HTMLDivElement>_e.target).getAttribute("class") == "points") {
                target = <HTMLDivElement>_e.target;
                touch=false;
                container.addEventListener("mousemove", movePoint);

            }
        });

        container.addEventListener("touchstart", function (_e: TouchEvent): void {
            _e.preventDefault();
            console.log(_e.target);
            if ((<HTMLDivElement>_e.target).getAttribute("class") == "points") {
                target = <HTMLDivElement>_e.target;
                touch=true;
                container.addEventListener("touchmove", movePoint);

            }
        });

        document.addEventListener("mouseup", function (): void {
            container.removeEventListener("mousemove", movePoint);
        });

        document.addEventListener("touchend", function (): void {
            container.removeEventListener("touchmove", movePoint);
        });

        


        let pointOne: HTMLDivElement = document.createElement("div");

        pointOne.setAttribute("id", "pointOne");
        pointOne.setAttribute("class", "points");
        container.appendChild(pointOne);
        lines["pointOne"] = [100 / zoom, 100 / zoom];

        let pointTwo: HTMLDivElement = document.createElement("div");

        pointTwo.setAttribute("id", "pointTwo");
        pointTwo.setAttribute("class", "points");
        container.appendChild(pointTwo);
        lines["pointTwo"] = [400 / zoom, 300 / zoom];

        let pointThree: HTMLDivElement = document.createElement("div");

        pointThree.setAttribute("id", "pointThree");
        pointThree.setAttribute("class", "points");
        container.appendChild(pointThree);
        lines["pointThree"] = [100 / zoom, 300 / zoom];

        if (window.innerWidth < 600) {
           
            canvas.style.width = "250px";
            canvas.style.height = "200px";
            zoom = 5;

            lines["pointOne"] = [50 / zoom, 50 / zoom];

            lines["pointTwo"] = [200 / zoom, 150 / zoom];
    
            lines["pointThree"] = [50 / zoom, 150 / zoom];
        }

        canvas.style.imageRendering = "pixelated";
        ctx.filter = "none";
        draw();

        let on: HTMLButtonElement = <HTMLButtonElement>document.getElementById("on");
        let off: HTMLButtonElement = <HTMLButtonElement>document.getElementById("off");

        off.addEventListener("click", function (): void {
            //canvas.style.imageRendering = "pixelated";
            this.className = "active";
            on.className = "";
            ctx.filter = "url(#remove-alpha)";
            draw();

        });

        on.addEventListener("click", function (): void {
            //canvas.style.imageRendering = "pixelated";
            this.className = "active";
            off.className = "";
            ctx.filter = "none";
            draw();
        });
    }

    function movePoint(_e: Event): void {
        _e.preventDefault();
       let x:number;
       let y:number;
       
        if(touch){
            x= (<TouchEvent>_e).changedTouches[0].pageX - container.offsetLeft + (container.offsetWidth / 2);
            y = (<TouchEvent>_e).changedTouches[0].pageY - container.offsetTop;
        }else{
             x= (<MouseEvent>_e).pageX - container.offsetLeft + (container.offsetWidth / 2);
             y = (<MouseEvent>_e).pageY - container.offsetTop;
        }
       
        if (x > (0 + target.offsetWidth / 2) && x < (container.offsetWidth - target.offsetWidth / 2) && y > (0 + target.offsetHeight / 2) && y < (container.offsetHeight - target.offsetHeight / 2)) {

            target.style.cssText = "top:" + y + "px;left:" + x + "px";

            switch (target.id) {
                case "pointOne":
                    lines[target.id] = [x / zoom, y / zoom];
                    break;
                case "pointTwo":
                    lines[target.id] = [x / zoom, y / zoom];
                    break;
                case "pointThree":
                    lines[target.id] = [x / zoom, y / zoom];
                    break;
            }
            draw();
        }
    }

    function draw(): void {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(lines["pointOne"][0], lines["pointOne"][1]);
        ctx.lineTo(lines["pointTwo"][0], lines["pointTwo"][1]);
        ctx.lineTo(lines["pointThree"][0], lines["pointThree"][1]);
        ctx.lineTo(lines["pointOne"][0], lines["pointOne"][1]);
        ctx.stroke();
        image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(image, 0, 0);
    }


    window.addEventListener("load", main);
}