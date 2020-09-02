namespace Meshes {
    export let canvas: HTMLCanvasElement;
    export let cr2: CanvasRenderingContext2D;
    let edges: Edges[] = [];
    let lines: Lines[] = [];
    let clickEdge: any;
    let flag: boolean = false;
    let flag2: boolean = false;
    let edge2: any;
    let edge1: any;
    let clearButton: HTMLButtonElement;
    let lineButton: HTMLButtonElement;
    let edgeButton: HTMLButtonElement;
    

    window.addEventListener("load", main);

    function main(): void {
        

        canvas = <HTMLCanvasElement>document.getElementById("can");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        cr2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let backGround: ImageData = cr2.getImageData(0, 0, cr2.canvas.width, cr2.canvas.height);
        window.setInterval(update, 20, backGround);
        handleLoad();


    }

    function handleLoad(): void {
        canvas.addEventListener("click", paintEdge);
        canvas.addEventListener("mousedown", getEdge);
        canvas.addEventListener("mouseout", dragEdge);
        window.addEventListener("mouseup", function up(): void {
            flag2 = false;
        });
        canvas.addEventListener("mousedown", dragEdge);
        canvas.addEventListener("mousemove", dragEdge);
        // canvas.addEventListener("click", strokeLine);
        canvas.addEventListener(`contextmenu`, function (e) {
            e.preventDefault();
        });

        clearButton = <HTMLButtonElement>document.getElementById("clear");
        clearButton.addEventListener("click", clear);
        lineButton = <HTMLButtonElement>document.getElementById("lines");
        lineButton.addEventListener("click", linesConne);
        // edgeButton.removeEventListener("click", handleLoad);
        edgeButton.removeEventListener("click", strokeLine);
    }

    function linesConne(): void {
        edge1 = null;
        edge2 = null;
        canvas.addEventListener("click", strokeLine);
        canvas.removeEventListener("click", paintEdge);
        canvas.removeEventListener("mousemove", dragEdge);
        edgeButton = <HTMLButtonElement>document.getElementById("edges");
        edgeButton.addEventListener("click", handleLoad);


    }

    function clear(): void {
        edges = [];
        lines = [];
        edge1 = null;
        edge2 = null;

    }

    function paintEdge(_event: MouseEvent): void {
        let getClick: Vector = new Vector(_event.offsetX, _event.offsetY);
        let edge: Edges = new Edges(getClick);
        let flag: boolean = false;
        if (edges.length < 1) {
            edges.push(edge);
            console.log(edges);
            edge.draw();

        }
        edges.forEach(lel => {
            if (lel.isHit(new Vector(_event.offsetX, _event.offsetY))) {
                flag = true;

            }
        });

        if (!flag) {
            edges.push(edge);
            console.log(edges);
            edge.draw();
        }

    }


    function getEdge(_event: MouseEvent): Edges | null {
        flag2 = true;

        for (let i: number = 0; i < edges.length; i++) {
            if (edges[i].isHit(new Vector(_event.offsetX, _event.offsetY))) {
                clickEdge = edges[i];
                return edges[i];

            }
        }
        return null;

    }

    function dragEdge(_event: MouseEvent): void {
        if (event?.type == "mouseup" || event?.type == "mouseout") {
            flag2 = false;

        }
        if (event?.type == "mousemove") {
            if (flag2) {
                clickEdge.changePos(new Vector(_event.offsetX, _event.offsetY));
                clickEdge.draw();

            }

        }

    }

    function strokeLine(_event: MouseEvent): void {

        if (edge1 != null) {
            edge2 = getEdge(_event);
        }
        if (getEdge(_event) != null && edge2 == null) {
            edge1 = getEdge(_event);

        }

        if (edge1 != null && edge2 != null) {
            let line: Lines | null = new Lines(edge1, edge2);
            lines.push(line);
            edge1 = null;
            edge2 = null;

        }

        flag2 = false;


    }

    function update(_backgroundData: any): void {
        cr2.putImageData(_backgroundData, 0, 0);
        lines.forEach(element => {
            element.draw();

        });
        edges.forEach(element => {
            element.draw();

        });
    }



}
