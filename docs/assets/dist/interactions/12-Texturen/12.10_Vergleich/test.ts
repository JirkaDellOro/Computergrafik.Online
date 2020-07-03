namespace Vergleich {
    let imgContainer: HTMLDivElement;
    let normal: HTMLInputElement;
    let displace: HTMLInputElement;
    // let sphareOhne: HTMLInputElement;
    // let sphareMit: HTMLInputElement;


    window.addEventListener("load", main);

    function main(): void {
        normal = <HTMLInputElement>document.getElementById("normal");
        displace = <HTMLInputElement>document.getElementById("displace");
        // sphareOhne = <HTMLInputElement>document.getElementById("sphareOhne");
        // sphareMit = <HTMLInputElement>document.getElementById("sphareMit");
        imgContainer = <HTMLDivElement>document.getElementById("imgcontainer");
        normal.addEventListener("change", changeState);
        displace.addEventListener("change", changeState);
        // sphareOhne.addEventListener("change", changeState);
        // sphareMit.addEventListener("change", changeState);
        changeState();
    }

    function load(): void {
        changeState();
    }

    function changeState(): void {
        if (normal.checked == true)
            imgContainer.style.backgroundImage = "url('img/Normal.png')";
        if (displace.checked == true)
            imgContainer.style.backgroundImage = "url('img/Displacement.png')";
        // if (sphareOhne.checked == true)
        //     imgContainer.style.backgroundImage = "url('img/SphareWoTexture.jpeg')";
        // if (sphareMit.checked == true)
        //     imgContainer.style.backgroundImage = "url('img/SphareWiTexture.jpeg')";
    }
}