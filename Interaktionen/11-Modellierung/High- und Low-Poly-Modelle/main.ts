let slider: HTMLInputElement;
let imgContainer: HTMLDivElement;
let images : string[] = [];


window.addEventListener("load", main);

function main(): void {
    slider = document.getElementById("sliderinput") as HTMLInputElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
    images = ["img/Low-High-Poly 1.png", "img/Low-High-Poly 2.png", "img/Low-High-Poly 3.png", "img/Low-High-Poly 4.png", "img/Low-High-Poly 5.png", "img/Low-High-Poly 6.png"];
    console.log(slider);
    load();
    slider.addEventListener("change", this.changeState);
}

function load(): void {
    changeState();
}

function changeState(): void {
    console.log("test");
    let currentIndex: number = parseInt(slider.value);

    for (let i: number = 1; i < 7; i++){
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/Low-High-Poly " + (currentIndex).toString() + ".png')";
        }
    }
}