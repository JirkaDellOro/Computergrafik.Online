// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var checkInt;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'playsinline': 1
        },
        //videoId: src,
        events: {
            'onReady': onPlayerReady,
            //'onStateChange': onPlayerStateChange,
        },
    });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    startInterval();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
/* 
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {	
      setTimeout(stopVideo, 6000);
      done = true;
}
}
*/

function stopVideo() {
    player.stopVideo();
}

function startInterval() {
    player.getDuration();
    console.log(player.getDuration());
    //checks every 100ms to see if the video has reached 6s
    checkInt = setInterval(function () {
        if (player.getCurrentTime() != player.getDuration()) {
            //console.log(player.getCurrentTime());
            setInformation(getCurrentTime);
        };
    }, 100)
}