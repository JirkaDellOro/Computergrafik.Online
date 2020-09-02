namespace Raytracing {
    let imgContainer: HTMLDivElement;
    let toggle: HTMLInputElement;




    window.addEventListener("load", main);
    let normalUrl: string;
    let displaceUrl: string;
   
    function main(): void {
        toggle = <HTMLInputElement>document.getElementById("togBtn");
        imgContainer = <HTMLDivElement>document.getElementById("imgcontainer");
        toggle.addEventListener("change", changeState);
        normalUrl = "url('img/ohne.png')";
        displaceUrl = "url('img/mit.png')";
        changeState();
    }



    function changeState(): void {
        if (toggle.checked == false)
            imgContainer.style.backgroundImage = normalUrl;
        if (toggle.checked == true)
            imgContainer.style.backgroundImage = displaceUrl;
    }
}