namespace BoneAnimation {
    let show: HTMLImageElement;
    let input: NodeListOf<HTMLInputElement>;
    let video: HTMLVideoElement;
    let playVideo: string = "1";

    function init(): void {
        show = <HTMLImageElement>document.getElementById("1");
        show.style.cssText = "display:block;"
        input = <NodeListOf<HTMLInputElement>>document.querySelectorAll("input");
        for (let i: number = 0; i < input.length; i++) {
            input[i].addEventListener("input", update);
        }


        let button: HTMLButtonElement = document.querySelector("button");
        button.addEventListener("click", play);

        let videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video')
        for (let i: number = 0; i < videos.length; i++) {

            videos[i].addEventListener('ended', videoEnded, false);
        }
    }
 
    function play(): void {
        video = <HTMLVideoElement>document.getElementById("video-" + playVideo);
        (<HTMLImageElement>show.children[0]).style.opacity = "0";
        
        video.style.display = "block";
        video.play();
        for (let i: number = 0; i < input.length; i++) {

            input[i].disabled = true;
        }
    }

    function videoEnded(): void {
        console.log("test");
        (<HTMLImageElement>show.children[0]).style.opacity = "1";
        video.currentTime = 0;
        video.style.display = "none";
        for (let i: number = 0; i < input.length; i++) {

            input[i].disabled = false;
        }
    }

    function update(_event: Event): void {

        playVideo = (<HTMLInputElement>_event.target).value;

        let showNew: HTMLImageElement = <HTMLImageElement>document.getElementById(playVideo);
        showNew.style.cssText = "display:block;"
        show.style.cssText = "display:hide;"
        show = showNew;
    }

    window.addEventListener("load", init);
}