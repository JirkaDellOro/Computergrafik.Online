let slider: HTMLInputElement;
let imgContainer: HTMLDivElement;
let images = [];


window.addEventListener("load", main);

function main(): void {
    slider = document.getElementById("sliderinput") as HTMLInputElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
    console.log(slider);
    load();
    slider.addEventListener("change", this.changeState);
}

function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/Low_High_Poly_1.jpg",
    "img/Low_High_Poly_2.jpg",
    "img/Low_High_Poly_3.jpg",
    "img/Low_High_Poly_4.jpg",
    "img/Low_High_Poly_5.jpg",
    "img/Low_High_Poly_6.jpg"
)

function load(): void {
    updateSlider();
}

function updateSlider(): void {
    let currentIndex: number = parseInt(slider.value);

    for (let i: number = 1; i < 7; i++){
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/Low_High_Poly_" + (currentIndex).toString() + ".jpg')";
        }
    }
}