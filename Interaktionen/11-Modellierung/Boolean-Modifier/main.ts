let imgContainer: HTMLDivElement;
let btnIntersect: HTMLButtonElement;
let btnUnion: HTMLButtonElement;
let btnDifference: HTMLButtonElement;
let images = [];


window.addEventListener("load", main);

function main(): void {
    btnIntersect = document.getElementById("intersect") as HTMLButtonElement;
    btnUnion = document.getElementById("union") as HTMLButtonElement;
    btnDifference = document.getElementById("difference") as HTMLButtonElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
    load();
    btnIntersect.onclick = function() {changeState((btnIntersect.id))};
    btnUnion.onclick = function() {changeState((btnUnion.id))};
    btnDifference.onclick = function() {changeState((btnDifference.id))};
}

function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/difference.png",
    "img/intersect.png",
    "img/union.png",
)

function load(): void {
    imgContainer.style.backgroundImage = "url('img/union.png')";
}

function changeState(e: string): void {
    if(e == "intersect")
        imgContainer.style.backgroundImage = "url('img/intersect.png')";
    if(e == "union")
        imgContainer.style.backgroundImage = "url('img/union.png')";
    if(e == "difference")
        imgContainer.style.backgroundImage = "url('img/difference.png')";


    console.log(e);


}