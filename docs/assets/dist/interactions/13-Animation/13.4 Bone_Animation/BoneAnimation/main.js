"use strict";
var BoneAnimation;
(function (BoneAnimation) {
    let show;
    let input;
    let video;
    function init() {
        show = document.getElementById("1");
        show.style.cssText = "display:block;";
        input = document.querySelector("input");
        input.addEventListener("input", update);
        let button = document.querySelector("button");
        button.addEventListener("click", play);
        let videos = document.querySelectorAll('video');
        for (let i = 0; i < videos.length; i++) {
            videos[i].addEventListener('ended', videoEnded, false);
        }
    }
    function play() {
        video = document.getElementById("video-" + (input.value));
        show.children[0].style.opacity = "0";
        video.style.display = "block";
        video.play();
        input.disabled = true;
    }
    function videoEnded() {
        console.log("test");
        show.children[0].style.opacity = "1";
        video.style.display = "none";
        input.disabled = false;
    }
    function update(_event) {
        let id = "" + (input.value);
        let showNew = document.getElementById(id);
        showNew.style.cssText = "display:block;";
        show.style.cssText = "display:hide;";
        show = showNew;
    }
    window.addEventListener("load", init);
})(BoneAnimation || (BoneAnimation = {}));
//# sourceMappingURL=main.js.map