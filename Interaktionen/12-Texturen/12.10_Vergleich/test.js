"use strict";
var Vergleich;
(function (Vergleich) {
    let imgContainer;
    let normal;
    let displace;
    // let sphareOhne: HTMLInputElement;
    // let sphareMit: HTMLInputElement;
    window.addEventListener("load", main);
    function main() {
        normal = document.getElementById("normal");
        displace = document.getElementById("displace");
        // sphareOhne = <HTMLInputElement>document.getElementById("sphareOhne");
        // sphareMit = <HTMLInputElement>document.getElementById("sphareMit");
        imgContainer = document.getElementById("imgcontainer");
        normal.addEventListener("change", changeState);
        displace.addEventListener("change", changeState);
        // sphareOhne.addEventListener("change", changeState);
        // sphareMit.addEventListener("change", changeState);
        changeState();
    }
    function load() {
        changeState();
    }
    function changeState() {
        if (normal.checked == true)
            imgContainer.style.backgroundImage = "url('img/Normal.png')";
        if (displace.checked == true)
            imgContainer.style.backgroundImage = "url('img/Displacement.png')";
        // if (sphareOhne.checked == true)
        //     imgContainer.style.backgroundImage = "url('img/SphareWoTexture.jpeg')";
        // if (sphareMit.checked == true)
        //     imgContainer.style.backgroundImage = "url('img/SphareWiTexture.jpeg')";
    }
})(Vergleich || (Vergleich = {}));
//# sourceMappingURL=test.js.map