namespace Transformations {

    interface Order {
        [key: string]: number;
    }

    interface Position {
        [key: number]: string;
    }

    let transX: number = 0;
    let posX: number = 0;

    let transY: number = 0;
    let posY: number = 0;

    let scaleingX: number = 1;
    let scaleingY: number = 1;

    let totation: number = 0;
    let rotated: number = 0;

    let positions: Position = { 0: "translate", 1: "scale", 2: "rotation" };
    let order: Order = { "translate": 0, "scale": 1, "rotation": 2 };

    let img: HTMLImageElement;

    function main(): void {

        img = document.querySelectorAll("img")[1];

        let inputX: HTMLInputElement = <HTMLInputElement>document.getElementById("translateX");
        inputX.addEventListener("input", translateX);

        let inputY: HTMLInputElement = <HTMLInputElement>document.getElementById("translateY");
        inputY.addEventListener("input", translateY);

        let scaleInpX: HTMLInputElement = <HTMLInputElement>document.getElementById("scaleX");
        scaleInpX.addEventListener("input", scaleX);

        let scaleInpY: HTMLInputElement = <HTMLInputElement>document.getElementById("scaleY");
        scaleInpY.addEventListener("input", scaleY);

        let rotation: HTMLInputElement = <HTMLInputElement>document.getElementById("rotate");
        rotation.addEventListener("input", rotate);

        let reset: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");
        reset.addEventListener("click", clear);

        let arrows: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("arows");
        for (let i: number = 0; i < arrows.length; i++) {
            arrows[i].addEventListener("click", moveControl);
        }

    }

    //change order of transformation and the order the HTML elements are displayed
    function moveControl(_event: MouseEvent): void {

        let target: HTMLAnchorElement = <HTMLAnchorElement>_event.currentTarget;
        let parent: HTMLDivElement = <HTMLDivElement>target.parentNode.parentNode;
        //right
        let category: string = parent.getAttribute("id");

        let position: number = order[category];
        let newPosition: number = order[category] + 1;

        if (newPosition <= 2) {
            parent.style.order = "" + newPosition;

            let move: string = positions[newPosition];
            order[category] = newPosition;
            order[move] = position;

            positions[newPosition] = category;
            positions[position] = move;

            let moveParent: HTMLDivElement = <HTMLDivElement>document.getElementById(move);
            moveParent.style.order = "" + position;

            let transform: string = getTransformation();
            img.style.transform = transform;
        }
    }

    //get order of transformation
    function getTransformation(): string {

        //write new variabel for transform(css)
        let result: string = "";

        switch (positions[0]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;

            case "scale":
                result += "scale(" + scaleingX + "," + scaleingY + ")";
                break;

            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }

        switch (positions[1]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;

            case "scale":
                result += "scale(" + scaleingX + "," + scaleingY + ")";
                break;

            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }

        switch (positions[2]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;

            case "scale":
                result += "scale(" + scaleingX + "," + scaleingY + ")";
                break;

            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }

        //result += "rotate(" + rotated + "deg)";

        return result;
    }

    //update transform values
    function translateX(_e: Event): void {

        let x: number = Number((_e.target as HTMLInputElement).value);
        posX = transX + x;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }

    function translateY(_e: Event): void {

        let y: number = Number((_e.target as HTMLInputElement).value);
        posY = transY - y;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }

    function scaleX(_e: Event): void {

        let x: number = Number((_e.target as HTMLInputElement).value);
        scaleingX = x;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }

    function scaleY(_e: Event): void {

        let y: number = Number((_e.target as HTMLInputElement).value);
        scaleingY = y;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }


    function rotate(_e: Event): void {

        let rot: number = Number((_e.target as HTMLInputElement).value);
        rotated = totation + rot;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }

    function clear(): void {

        posX = 0;
        posY = 0;
        scaleingX = 1;
        scaleingX = 1;
        rotated = 0;

        let transform: string = getTransformation();
        img.style.transform = transform;

        positions = { 0: "translate", 1: "scale", 2: "rotation" };
        order = { "translate": 0, "scale": 1, "rotation": 2 };

        (<HTMLDivElement>document.getElementById("translate")).style.order = "0";
        (<HTMLDivElement>document.getElementById("scale")).style.order = "1";
        (<HTMLDivElement>document.getElementById("rotation")).style.order = "2";

        let inputX: HTMLInputElement = <HTMLInputElement>document.getElementById("translateX");
        inputX.value = "0";

        let inputY: HTMLInputElement = <HTMLInputElement>document.getElementById("translateY");
        inputY.value = "0";

        let scaleInpX: HTMLInputElement = <HTMLInputElement>document.getElementById("scaleX");
        scaleInpX.value = "1";

        let scaleInpY: HTMLInputElement = <HTMLInputElement>document.getElementById("scaleY");
        scaleInpY.value = "1";

        let rotation: HTMLInputElement = <HTMLInputElement>document.getElementById("rotate");
        rotation.value = "0";
    }

    document.addEventListener("DOMContentLoaded", main);

}