namespace CO070_ {
    let show: HTMLImageElement;
    function init(): void {
        show = <HTMLImageElement>document.getElementById("10");
        show.style.cssText = "display:block;"
        let input: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("slider-container")[0];

        input.addEventListener("input", update);
    }

    function update(_event: Event): void {
        let input: any = document.getElementsByClassName("slider");
        let id: string = "" + (input[0].value) + (input[1].value) + "";
        
        let showNew: HTMLImageElement = <HTMLImageElement>document.getElementById(id);
        showNew.style.cssText = "display:block;"
        show.style.cssText = "display:hide;"
        show = showNew;
    }

    window.addEventListener("load", init);
}