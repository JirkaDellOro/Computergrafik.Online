import jQuery from "jquery"
window.$ = jQuery;
window.jQuery = jQuery;

//$(valueNavigation);
/* Youtube Code mittels IFrame code einbinden und darauf achten das er embed beinhaltet - austauschcode selber einpflegen? */
var modulHash = {
    10: ["QOCaacO8wus", true],
    11: ["dGiQaabX3_o", true],
    12: ["yS1ibDImAYU", true],
    13: ["FaB41TtgS54", true],
    14: ["./assets/dist/animate/01bitsandbytes/v01-02-zahlensystem.html", false],
    15: ["./assets/dist/animate/test/v01-01-zahlensystem.html", false],
    16: ["", true],
    17: ["", true],
};

var getRotation = false;
var valueNavigation;
var openInformation = false;

$(document).ready(function () {
    console.info('DOM Ready');
    var countNav = $('ul').length;

    $('#toggleMenu').click(function () {
        $('.navigation-toggle').slideToggle()
    });

    $('.navigation-list').click(function () {
        valueNavigation = $(this).attr('id');
        for (var i = 0; i < countNav; i++) {
            if (valueNavigation == [i]) {
                $('.navigation-status-' + [i]).addClass('active-navigation');
                $('.navigation-infos-' + [i]).slideToggle();
                var strHeadline = $('.navigation-status-' + [i]).text();
                $(".headline").html(strHeadline);
            } else {
                $('.navigation-status-' + [i]).removeClass('active-navigation');
                $('.navigation-infos-' + [i]).slideUp();
            }
        }
    });

    $('.toggleSub').click(function () {
        $('.toggleSub').removeClass('active-infos');
        $(this).addClass('active-infos');
        $('.navigation-toggle').slideToggle();
        var strSubHeadline = $(this).text();
        $(".subheadline").html(strSubHeadline);
    });

    $('.toggleSub').click(function () {
        var changeIFrame = $(this).attr('id');
        console.log(modulHash[changeIFrame][0]);
        if (modulHash[changeIFrame][1] == true) {
            $('.content-container').css('padding-bottom', '56.25%');
            $('.youtube-player').css('display', 'block');
            $('.iframe-interaction').css('display', 'none');
            player.loadVideoById(modulHash[changeIFrame][0]);
            getRotation = false;
            
        } else {
            stopVideo();
            $('.content-container').css('padding-bottom', '0');
            $('.youtube-player').css('display', 'none');
            $('.iframe-interaction').css('display', 'block');
            $('.iframe-interaction').html("<iframe src='" +
                modulHash[changeIFrame][0] + "' width='auto' height='470px'></iframe>")
            console.log("False");
            getRotation =  true;
        }
    });

});

$('.information-container').click(function () {
    if (openInformation == false) {
        $('.information-container').animate ({
            right: '250px'
        }, 500);
        openInformation = true;
    } else {
        $('.information-container').animate({
            right: '-5px'
        }, 500);
        openInformation = false;
    }
});

function readDeviceOrientation() {
    if(getRotation == true)
    {             		
        if (Math.abs(window.orientation) === 90) {
            // Landscape
            $('.modual').css('display', 'block');
            $('.iframe-interaction').css('display', 'none');

        } else {
            // Portrait
            //document.getElementById("orientation").innerHTML = "PORTRAIT";
            
            $('.modual').css('display', 'none');
            $('.iframe-interaction').css('display', 'block');
        }
    }
}

window.onorientationchange = readDeviceOrientation;