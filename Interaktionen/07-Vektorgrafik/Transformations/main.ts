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

    let skX: number = 0;
    let skewedX: number = 0;

    let skY: number = 0;
    let skewedY: number = 0;

    let totation: number = 0;
    let rotated: number = 0;

    let positions: Position = { 0: "translate", 1: "skew", 2: "rotation" };
    let order: Order = { "translate": 0, "skew": 1, "rotation": 2 };

    let img: HTMLImageElement;

    function main(): void {

        img = document.querySelector("img");

        let inputX: HTMLInputElement = <HTMLInputElement>document.getElementById("translateX");
        inputX.addEventListener("input", translateX);

        let inputY: HTMLInputElement = <HTMLInputElement>document.getElementById("translateY");
        inputY.addEventListener("input", translateY);

        let skewInpX: HTMLInputElement = <HTMLInputElement>document.getElementById("skewX");
        skewInpX.addEventListener("input", skewX);

        let skewInpY: HTMLInputElement = <HTMLInputElement>document.getElementById("skewY");
        skewInpY.addEventListener("input", skewY);

        let rotation: HTMLInputElement = <HTMLInputElement>document.getElementById("rotate");
        rotation.addEventListener("input", rotate);

        let leftArrows: HTMLCollectionOf<HTMLAnchorElement> = <HTMLCollectionOf<HTMLAnchorElement>>document.getElementsByClassName("left");
        for (let i: number = 0; i < leftArrows.length; i++) {
            leftArrows[i].addEventListener("click", moveLeft);
        }


        let rightArrows: HTMLCollectionOf<HTMLAnchorElement> = <HTMLCollectionOf<HTMLAnchorElement>>document.getElementsByClassName("right");
        for (let i: number = 0; i < rightArrows.length; i++) {
            rightArrows[i].addEventListener("click", moveRight);
        }
    }

    //change order of transformation and the order the HTML elements are displayed
    function moveLeft(_event: MouseEvent): void {

        let target: HTMLAnchorElement = <HTMLAnchorElement>_event.target;
        let parent: HTMLDivElement = <HTMLDivElement>target.parentNode;
        let category: string = parent.getAttribute("id");

        let position: number = order[category];
        let newPosition: number = order[category] - 1;

        if (newPosition >= 0) {
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

    function moveRight(_event: MouseEvent): void {
        let target: HTMLAnchorElement = <HTMLAnchorElement>_event.target;
        let parent: HTMLDivElement = <HTMLDivElement>target.parentNode;
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

            case "skew":
                result += "skew(" + skewedX + "deg," + skewedY + "deg)";
                break;

            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }

        switch (positions[1]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;

            case "skew":
                result += "skew(" + skewedX + "deg," + skewedY + "deg)";
                break;

            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }

        switch (positions[2]) {
            case "translate":
                result += "translate(" + posX + "%," + posY + "%)";
                break;

            case "skew":
                result += "skew(" + skewedX + "deg," + skewedY + "deg)";
                break;

            case "rotation":
                result += "rotate(" + rotated + "deg)";
                break;
        }

        result += "rotate(" + rotated + "deg)";

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

    function skewX(_e: Event): void {

        let x: number = Number((_e.target as HTMLInputElement).value);
        skewedX = skX - x;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }

    function skewY(_e: Event): void {

        let y: number = Number((_e.target as HTMLInputElement).value);
        skewedY = skY + y;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }


    function rotate(_e: Event): void {

        let rot: number = Number((_e.target as HTMLInputElement).value);
        rotated = totation + rot;
        let transform: string = getTransformation();
        img.style.transform = transform;
    }

    document.addEventListener("DOMContentLoaded", main);

}