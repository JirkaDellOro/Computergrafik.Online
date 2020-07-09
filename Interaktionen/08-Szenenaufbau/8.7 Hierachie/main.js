"use strict";
var BoneAnimation;
(function (BoneAnimation) {
    let show;
    let input;
    let video;
    let playVideo = "1";
    function init() {
        show = document.getElementById("1");
        show.style.cssText = "display:block;";
        input = document.querySelectorAll("input");
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener("input", update);
        }
        let button = document.querySelector("button");
        button.addEventListener("click", play);
        let videos = document.querySelectorAll('video');
        for (let i = 0; i < videos.length; i++) {
            videos[i].addEventListener('ended', videoEnded, false);
        }
    }
    function play() {
        video = document.getElementById("video-" + playVideo);
        show.children[0].style.opacity = "0";
        video.style.display = "block";
        video.play();
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = true;
        }
    }
    function videoEnded() {
        console.log("test");
        show.children[0].style.opacity = "1";
        video.currentTime = 0;
        video.style.display = "none";
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false;
        }
    }
    function update(_event) {
        playVideo = _event.target.value;
        let showNew = document.getElementById(playVideo);
        showNew.style.cssText = "display:block;";
        show.style.cssText = "display:hide;";
        show = showNew;
    }
    window.addEventListener("load", init);
})(BoneAnimation || (BoneAnimation = {}));
//# sourceMappingURL=main.js.map