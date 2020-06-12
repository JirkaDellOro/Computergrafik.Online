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
        height: '100%',
        width: '100%',
        playerVars: {
            'playsinline': 1,
            'rel': 0
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
    // event.target.setVolume(0);
    event.target.playVideo();
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

function startInterval(information) {
    var timeInformation = information[0].time;
    var i = 0;
    checkInt = setInterval(function () {
        if (player.getCurrentTime() != player.getDuration()) {
            var currentTime = Math.floor(player.getCurrentTime());
            if(i < timeInformation.length && currentTime == timeInformation[i].timeDuration)
            {
                // $('.information-string').removeClass('active-information');
                setHighlight();
                $('.information-text').append('<p class="information-string">' + timeInformation[i].informationText + '</p>');
                
                // $('.infroamtion-string').addClass('active-infos');
                i = i+ 1;
            }
            if(i < timeInformation.length && timeInformation[i].timeDuration < currentTime )
            {
                $('.information-text').append('<p class="information-string">' + timeInformation[i].informationText + '</p>');
                i = i + 1;
            }
            
        };
    }, 100)
}

function setHighlight(){
    $('.information-container').addClass('information-container-highlight');
    $('.information-wrapper').addClass('information-wrapper-highlight');

    setTimeout(function() {
        $('.information-container').removeClass('information-container-highlight');
        $('.information-wrapper').removeClass('information-wrapper-highlight');
    },2000);
}
