let imgContainer: HTMLDivElement;
let xCheck: HTMLInputElement;
let yCheck: HTMLInputElement;
let zCheck: HTMLInputElement;


window.addEventListener("load", main);

function main(): void {
    xCheck = document.getElementById("xCheck") as HTMLInputElement;
    yCheck = document.getElementById("yCheck") as HTMLInputElement;
    zCheck = document.getElementById("zCheck") as HTMLInputElement;
    imgContainer = document.getElementById("imgcontainer") as HTMLDivElement;
    load();
    xCheck.addEventListener("change", this.changeState);
    yCheck.addEventListener("change", this.changeState);
    zCheck.addEventListener("change", this.changeState);
}

function load(): void {
    changeState();
}

function changeState(): void {
    let axis: string = "";

    if (xCheck.checked == true)
        axis += "X";
    if (yCheck.checked == true)
        axis += "Y";
    if (zCheck.checked == true)
        axis += "Z";

    console.log(axis);

    if (axis === "") {
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_keine_spiegelung.png')";
    }
    else
        imgContainer.style.backgroundImage = "url('img/(i)_Mirror_" + axis + ".png')";

}