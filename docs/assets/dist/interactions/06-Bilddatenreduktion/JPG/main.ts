let slider: HTMLInputElement;
let imgContainer: HTMLDivElement;
let label: HTMLDivElement;
let dateigroesse: string[] = ["60,5", "33,9", "21,8", "21,3", "13,7", "11,2", "9,53", "9,01"]
let images: HTMLImageElement[] = [];

window.addEventListener("load", init);

function preload(): void {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

// @ts-ignore
preload (
    "img/jpg00.jpg",
    "img/jpg01.jpg",
    "img/jpg02.jpg",
    "img/jpg03.jpg",
    "img/jpg04.jpg",
    "img/jpg05.jpg",
    "img/jpg06.jpg",
    "img/jpg07.jpg"
)

function init(): void {
    slider = document.getElementById("compression-slider") as HTMLInputElement;
    imgContainer = document.getElementById("image-container") as HTMLDivElement;
    label = document.getElementById("datengroesse") as HTMLDivElement;

    updateSlider(slider);
}

function updateSlider(_s: HTMLInputElement): void {
    let value: number = parseInt(_s.value);
    label.innerText = "Dateigröße: " + dateigroesse[_s.value] + " KB";
    imgContainer.style.backgroundImage = "url('img/jpg0" + value.toString() + ".jpg')";
}
