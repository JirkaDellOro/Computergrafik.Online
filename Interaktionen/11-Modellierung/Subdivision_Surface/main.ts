let slider: HTMLInputElement;
let imgContainer: HTMLDivElement;
let images : string[] = [];


window.addEventListener("load", main);

function main(): void {
    slider = document.getElementById("sliderinput") as HTMLInputElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
    load();
}
function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/(i)_SubDiv_0.jpg",
    "img/(i)_SubDiv_1.jpg",
    "img/(i)_SubDiv_2.jpg",
    "img/(i)_SubDiv_3.jpg",
    "img/(i)_SubDiv_4.jpg",
    "img/(i)_SubDiv_5.jpg",
    "img/(i)_SubDiv_6.jpg"
)

function load(): void {
    updateSlider();
}

function updateSlider(): void {
    let currentIndex: number = parseInt(slider.value);

    for (let i: number = 0; i < 7; i++){
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/(i)_SubDiv_" + (currentIndex).toString() + ".jpg')";
        }
    }
}