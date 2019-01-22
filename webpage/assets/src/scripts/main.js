import jQuery from "jquery"
window.$ = jQuery;
window.jQuery = jQuery;



var setData;
var getRotation = false;
var valueNavigation;
var openInformation = false;
var index;
var constructionText = "Diese Seite befindet sich noch in der Entwicklung";

$(document).ready(function () {

    console.info('DOM Ready');

});

$('.information-container').click(function () {
    if($(window).width() < 760)
    {
        if (openInformation == false) {
            $('.information-text').css('display', 'block');
            $('.information-container').animate({
                right: '250px'
            }, 500);
            openInformation = true;
        } else {
            $('.information-container').animate({
                right: '-5px'
            }, 500);
            setTimeout(function () {
                $('.information-text').css('display', 'none');
            }, 500);
            openInformation = false;
        }
    }
});

function readDeviceOrientation() {
    if($(window).width() < 760)
    {
        if (getRotation == true) {
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
}


window.onorientationchange = readDeviceOrientation;

// Build Navigation

var requestURL = './assets/dist/data/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    var getDataFromJson = request.response;
    setData = JSON.parse(getDataFromJson);
    setChapter(setData);
}

function setChapter(jsonObj) {
    var chapter = jsonObj['section'];
    var addChapter = document.getElementsByClassName('navigation-toggle')[0];

    for (let i = 0; i < chapter.length; i++) {
        var myChapter = document.createElement('div');
        var ulList = document.createElement('ul');
        // ulList.className = "navigation-list";
        ulList.id = [i];
        myChapter.className = "navigation-status-" + [i] + " navigation-list";
        myChapter.id = [i];
        myChapter.textContent = chapter[i].sectionPage;
        addChapter.appendChild(ulList);
        ulList.appendChild(myChapter);


        for (let j = 0; j < chapter[i].page.length; j++) {
            var liList = document.createElement('li');
            liList.className = "navigation-infos-" + [i] + " toggleSub";
            if(chapter[i].page[j].finished == false)
                liList.className = "navigation-infos-" + [i] + " toggleSub underconstruction";
            liList.id = chapter[i].page[j].id;
            liList.textContent = chapter[i].page[j].pageName
            ulList.appendChild(liList);
        }
    }
    setNaviagtion();
    // setNextChapter();
}

function setNaviagtion() {
    var countNav = $('ul').length;
    var toggleNav = true;

    $('#toggleMenu').click(function () {
        if (toggleNav == true) {
            $('.navigation-toggle').slideToggle();
            $('.navigation-header').css('bottom', '0');
            toggleNav = false;
        } else {
            $('.navigation-toggle').slideToggle();
            $('.navigation-header').css('bottom', '');
            toggleNav = true;
        }
        // var countNav = $('ul').length;
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
        // if()
        console.log($(window).width());
        if($(window).width() < 760)
            $('.navigation-toggle').slideToggle();
        var strSubHeadline = $(this).text();
        $(".subheadline").html(strSubHeadline);
        $('.navigation-header').css('bottom', '');
        $('.information-container').css('display', 'block')
        $('.projekt-text').css('display', 'none');
        toggleNav = true;
    });

    $('.toggleSub').click(function () {
        index = $(this).attr('id');
        console.log(index);
        var chapter = setData['section'];
        for (let i = 0; i < chapter.length; i++) {
            for (let j = 0; j < chapter[i].page.length; j++) {
                if (chapter[i].page[j].id == index) {

                    var chapterIndex = chapter[i].page[j];
                    var liCount = chapter[i].page;
                    var liLength = liCount.length - 1;
                    getChapter(chapterIndex , liCount, liLength);
                }
            }
        }
    });
};


$('.next').click(function () {
    var chapter = setData['section'];
    for (let i = 0; i < chapter.length; i++) {
        for (let j = 0; j < chapter[i].page.length; j++) {
            if (chapter[i].page[j].id == index) {
                var chapterIndex = chapter[i].page[j + 1];
                var liCount = chapter[i].page;
                var liLength = liCount.length - 1;
                getChapter(chapterIndex , liCount, liLength);
                index = chapter[i].page[j + 1];
                setHeadline(index.id, index.pageName);
            }
        }
    }
    index = index.id;
});

$('.prev').click(function () {
    var chapter = setData['section'];
    for (let i = 0; i < chapter.length; i++) {
        for (let j = 0; j < chapter[i].page.length; j++) {
            if (chapter[i].page[j].id == index) {
                var chapterIndex = chapter[i].page[j - 1];
                var liCount = chapter[i].page;
                var liLength = liCount.length - 1;
                getChapter(chapterIndex , liCount, liLength);
                index = chapter[i].page[j - 1];
                setHeadline(index.id, index.pageName);
            }
        }
    }
    index = index.id;
});


function getChapter(chapterIndex, liCount, liLength) {
    $('.iframe-interaction').empty();
    if(chapterIndex.finished == true)
    {
        $('.construction-text').css('display', 'none');
        if (chapterIndex.pageContent[0].youtubeClip == true) {
            // $('.content-container').css('padding-bottom', '56.25%');
            $('.content-container').css('display', 'block');
            $('.youtube-player').css('display', 'block');
            $('.iframe-interaction').css('display', 'none');
            $('.information-string').remove();
            player.loadVideoById(chapterIndex.pageContent[0].content);
            setInformation(chapterIndex.pageTime);
            getRotation =  false;
            checkArrows(chapterIndex, liCount, liLength);

        } else {
            stopVideo();
            $('.content-container').css('display', 'none');
            $('.youtube-player').css('display', 'none');
            $('.iframe-interaction').css('display', 'block');
            $('.information-string').remove();
            $('.iframe-interaction').html('<div class ="btn-container"><a class="btn-interaktion" href="' + chapterIndex.pageContent[0].content +'" target="_blank">' + chapterIndex.pageName + '</a></div>' )
            // $('.iframe-interaction').html("<iframe src='" + chapterIndex.pageContent[0].content + "'></iframe>")
            getRotation = true;
            checkArrows(chapterIndex, liCount, liLength);
            readDeviceOrientation();
        }
    }else{
        $('.youtube-player').css('display', 'none');
        $('.iframe-interaction').css('display', 'none');
        $('.content-container').css('display', 'block');
        $('.construction-text').css('display', 'block');
        $('.information-string').remove();
        stopVideo();
    }
    return index = chapterIndex.id;
}

function setHeadline(id, pageName){
    var indexNumeration = "#" + id;
    $(".subheadline").html(pageName);
    $('.toggleSub').removeClass('active-infos');
    $(indexNumeration).addClass('active-infos');
}

function checkArrows(chapterIndex, liCount, liLength)
{
    if(liCount[0] == chapterIndex)
    {
        $('.next').css('opacity', '1');
        $('.prev').css('opacity', '0');
    }
    else if(liCount[liLength] == chapterIndex)
    {
        $('.next').css('opacity', '0');
        $('.prev').css('opacity', '1');
    }
    else
    {
        $('.next').css('opacity', '1');
        $('.prev').css('opacity', '1');
    }
}

function setInformation(pageInformation){
    // var currentTime = startInterval();
    // console.log(startInterval())
    startInterval(pageInformation);
}
