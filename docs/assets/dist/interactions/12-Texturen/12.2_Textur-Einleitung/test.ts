let imgContainer: HTMLDivElement;
let kubusOhne: HTMLInputElement;
let kubusMit: HTMLInputElement;
let sphareOhne: HTMLInputElement;
let sphareMit: HTMLInputElement;


window.addEventListener("load", main);

function main(): void {
    kubusOhne = <HTMLInputElement>document.getElementById("kubusOhne");
    kubusMit = <HTMLInputElement>document.getElementById("kubusMit");
    sphareOhne = <HTMLInputElement>document.getElementById("sphareOhne");
    sphareMit = <HTMLInputElement>document.getElementById("sphareMit");
    imgContainer = <HTMLDivElement>document.getElementById("imgcontainer");
    kubusOhne.addEventListener("change", changeState);
    kubusMit.addEventListener("change", changeState);
    sphareOhne.addEventListener("change", changeState);
    sphareMit.addEventListener("change", changeState);
    changeState();
}

// function load(): void {
//     changeState();
// }

function changeState(): void {
    if (kubusOhne.checked == true)
        imgContainer.style.backgroundImage = "url('img/KubusWoTexture.jpeg')";
    if (kubusMit.checked == true)
        imgContainer.style.backgroundImage = "url('img/KubusWiTexture.jpeg')";
    if (sphareOhne.checked == true)
        imgContainer.style.backgroundImage = "url('img/SphareWoTexture.jpeg')";
    if (sphareMit.checked == true)
        imgContainer.style.backgroundImage = "url('img/SphareWiTexture.jpeg')";
}