namespace BoneAnimation {
    let show: HTMLImageElement;
    let input: HTMLInputElement;
    let video: HTMLVideoElement;

    function init(): void {
        show = <HTMLImageElement>document.getElementById("1");
        show.style.cssText = "display:block;"
        input = <HTMLInputElement>document.querySelector("input");

        input.addEventListener("input", update);

        let button: HTMLButtonElement = document.querySelector("button");
        button.addEventListener("click", play);

        let videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video')
        for (let i: number = 0; i < videos.length; i++) {

            videos[i].addEventListener('ended', videoEnded, false);
        }

    }

    function play(): void {
        video = <HTMLVideoElement>document.getElementById("video-" + (input.value));
        (<HTMLImageElement>show.children[0]).style.opacity = "0";
        video.style.display = "block";
        video.play();
        input.disabled=true;
    }

    function videoEnded(): void {
        console.log("test");
        (<HTMLImageElement>show.children[0]).style.opacity = "1";
        video.style.display = "none";
        input.disabled=false;
    }

    function update(_event: Event): void {

        let id: string = "" + (input.value);

        let showNew: HTMLImageElement = <HTMLImageElement>document.getElementById(id);
        showNew.style.cssText = "display:block;"
        show.style.cssText = "display:hide;"
        show = showNew;
    }

    window.addEventListener("load", init);
}