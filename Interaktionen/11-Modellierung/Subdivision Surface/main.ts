let slider: HTMLInputElement;
let imgContainer: HTMLDivElement;
let images : string[] = [];


window.addEventListener("load", main);

function main(): void {
    slider = document.getElementById("sliderinput") as HTMLInputElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
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

    for (let i: number = 0; i < 7; i++){
        if (currentIndex == i) {
            imgContainer.style.backgroundImage = "url('img/(i)_SubDiv_" + (currentIndex).toString() + ".png')";
        }
    }
}