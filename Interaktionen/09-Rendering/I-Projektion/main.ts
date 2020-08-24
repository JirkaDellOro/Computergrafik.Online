namespace Projektion {
    let show: HTMLImageElement;
    let input: NodeListOf<HTMLInputElement>;
    let showImg: string = "2";

    function init(): void {
        show = <HTMLImageElement>document.getElementById("2");
       console.log(show);
        input = <NodeListOf<HTMLInputElement>>document.querySelectorAll("input");
        for (let i: number = 0; i < input.length; i++) {

            input[i].addEventListener("input", update);
        }
    }

    function update(_event: Event): void {

        showImg = (<HTMLInputElement>_event.target).value;
        console.log(showImg);
        let showNew: HTMLImageElement = <HTMLImageElement>document.getElementById(showImg);
        showNew.style.cssText = "display:block;"
        show.style.cssText = "display:none;"
        show = showNew;
    }

    window.addEventListener("load", init);
}