var dataSet;
var getRotation = false;
var valueNavigation;
var openInformation = false;
var index;
var constructionText = "Diese Seite befindet sich noch in der Entwicklung";
var section;

$(document).ready(function () {

	console.info('DOM Ready');
});

$('.information-container').click(function () {
	if ($(window).width() < 760) {
		if (openInformation) {
			$('.information-container').animate({
				right: '-5px'
			}, 500);
			setTimeout(function () {
				$('.information-text').css('display', 'none');
			}, 500);
			openInformation = false;
		} else {
			$('.information-text').css('display', 'block');
			$('.information-container').animate({
				right: '250px'
			}, 500);
			openInformation = true;
		}
	}
});

function readDeviceOrientation() {
	if ($(window).width() < 760) {
		if (getRotation === true) {
			if (Math.abs(window.orientation) === 90) {
				// Landscape
				$('.modual').css('display', 'block');
				$('.iframe-interaction').css('display', 'none');
			} else {
				$('.modual').css('display', 'none');
				$('.iframe-interaction').css('display', 'block');
			}
		}
	}
}

window.onorientationchange = readDeviceOrientation;

// Build Navigation

let requestURL = './assets/dist/data/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
	let getDataFromJson = request.response;
	dataSet = JSON.parse(getDataFromJson);
	setChapter(dataSet);
};

function setChapter(jsonObj) {
	let chapter = jsonObj['section'];
	let addChapter = document.getElementsByClassName('navigation-toggle')[0];

	for (let i = 0; i < chapter.length; i++) {
		let myChapter = document.createElement('div');
		let ulList = document.createElement('ul');
		ulList.id = [i];
		myChapter.className = "navigation-status-" + [i] + " navigation-list";
		myChapter.id = [i];
		myChapter.textContent = chapter[i].sectionPage;
		addChapter.appendChild(ulList);
		ulList.appendChild(myChapter);

		for (let j = 0; j < chapter[i].page.length; j++) {

			let liList = document.createElement('li');
			liList.className = "navigation-infos-" + [i] + " toggleSub";

			if (!chapter[i].page[j].finished) {
				liList.className = "navigation-infos-" + [i] + " toggleSub underconstruction";
			}

			liList.id = chapter[i].page[j].id;
			liList.textContent = chapter[i].page[j].pageName;
			liList.tabIndex = i;
			liList.accessKey = i;
			ulList.appendChild(liList);
		}
	}
	setNaviagtion();
	// TODO: after finishing a chapter the next chapter should be opened automatically
	// setNextChapter();
}

function setNaviagtion() {
	let countNav = $('ul').length;
	let toggleNav = true;

	$('#toggleMenu').click(function () {
		if (toggleNav) {
			$('.navigation-toggle').slideToggle();
			$('.navigation-header').css('bottom', '0');
			toggleNav = false;
		} else {
			$('.navigation-toggle').slideToggle();
			$('.navigation-header').css('bottom', '');
			toggleNav = true;
		}
	});

	$('.navigation-list').click(function () {
		valueNavigation = $(this).attr('id');
		for (let i = 0; i < countNav; i++) {
			if (parseInt(valueNavigation) === i) {
				$('.navigation-status-' + [i]).addClass('active-navigation');
				$('.navigation-infos-' + [i]).slideToggle();
				$('.navigation-infos-' + [i]).tabIndex = i;
				let strHeadline = $('.navigation-status-' + [i]).text();
				$(".headline").html(strHeadline);

			} else {
				$('.navigation-status-' + [i]).removeClass('active-navigation');
				$('.navigation-infos-' + [i]).slideUp();
			}
		}
	});

	document.addEventListener("keydown", event => {

		let activeElement = $('.active-navigation');

		if (event.isComposing || event.keyCode === 83) {
			let chapter = dataSet['section'];
			for (let i = 0; i < chapter.length; i++) {
				for (let j = 0; j < chapter[i].page.length; j++) {
					if (index === chapter[i].page[j].id) {
						let chapterIndex = chapter[i].page[j + 1];
						let liCount = chapter[i].page;
						let liLength = liCount.length - 1;
						getChapter(chapterIndex, liCount, liLength);
						index = chapter[i].page[j + 1];
						setHeadline(index.id, index.pageName);
					}
				}
			}
			index = index.id;
		}
		if(event.isComposing || event.keyCode === 87) {
			let chapter = dataSet['section'];
			for (let i = 0; i < chapter.length; i++) {
				for (let j = 0; j < chapter[i].page.length; j++) {
					if (index === chapter[i].page[j].id) {
						let chapterIndex = chapter[i].page[j - 1];
						let liCount = chapter[i].page;
						let liLength = liCount.length - 1;
						getChapter(chapterIndex, liCount, liLength);
						index = chapter[i].page[j - 1];
						setHeadline(index.id, index.pageName);
					}
				}
			}
			index = index.id;
		}
	});


	// document.addEventListener('keydown', event => {
	//     console.log(event.keyCode);
	// });

	$('.toggleSub').click(function () {
		$('.toggleSub').removeClass('active-infos');
		$(this).addClass('active-infos');
		if ($(window).width() < 760) $('.navigation-toggle').slideToggle();
		var strSubHeadline = $(this).text();
		$(".subheadline").html(strSubHeadline);
		$('.navigation-header').css('bottom', '');
		$('.information-container').css('display', 'block');
		$('.projekt-text').css('display', 'none');
		toggleNav = true;
	});

	$('.toggleSub').click(function () {
		index = $(this).attr('id');
		var chapter = dataSet['section'];
		for (var i = 0; i < chapter.length; i++) {
			for (var j = 0; j < chapter[i].page.length; j++) {
				if (chapter[i].page[j].id == index) {
					var chapterIndex = chapter[i].page[j];
					var liCount = chapter[i].page;
					var liLength = liCount.length - 1;
					getChapter(chapterIndex, liCount, liLength);
				}
			}
		}
	});
};

$('.next').click(function () {
	let chapter = dataSet['section'];
	for (let i = 0; i < chapter.length; i++) {
		for (let j = 0; j < chapter[i].page.length; j++) {
			if (index === chapter[i].page[j].id) {
				let chapterIndex = chapter[i].page[j + 1];
				let liCount = chapter[i].page;
				let liLength = liCount.length - 1;
				getChapter(chapterIndex, liCount, liLength);
				index = chapter[i].page[j + 1];
				setHeadline(index.id, index.pageName);
			}
		}
	}
	index = index.id
});

$('.prev').click(function () {
	let chapter = dataSet['section'];
	for (let i = 0; i < chapter.length; i++) {
		for (let j = 0; j < chapter[i].page.length; j++) {
			if (index === chapter[i].page[j].id) {
				let chapterIndex = chapter[i].page[j - 1];
				let liCount = chapter[i].page;
				let liLength = liCount.length - 1;
				getChapter(chapterIndex, liCount, liLength);
				index = chapter[i].page[j - 1];
				setHeadline(index.id, index.pageName);
			}
		}
	}
	index = index.id
});

function getCurrentPage() {
	let section = dataSet['section'];
	for (let i = 0; i < section.length; i++) {
		for (let j = 0; j < section[i].page.length; j++) {
			if (index === section[i].page[j].id) {
				return section[i].page[j - 1];
			}
		}
	}
}

function filterCurrentPage() {
	let sections = dataSet['section'];
	for (let i = 0; i < sections.length; i++) {
		sections[i].page.filter(
			function(page) {
				if(page.id === index) {
					return page;
				}
			}
		)
	}
}

function getChapter(page, pages, pageLength) {
	$('.desktop-headline').html(page.pageName);
	$('.mobile-headline').html(page.pageName);
	if (page.finished === true) {
		$('.construction-text').css('display', 'none');
		$('.iframe-interaction').css('display', 'none');
		$('.iframe-interaction').css('display', 'none');
		$('.content-container').css('display', 'none');
		$('.youtube-player').css('display', 'none');
		if (page.pageContent[0].youtubeClip === true) {
			// $('.content-container').css('padding-bottom', '56.25%');
			stopVideo();
			player.loadVideoById(page.pageContent[0].content);
			$('.youtube-player').css('display', 'block');
			$('.content-container').css('display', 'block');
			$('.youtube-player').css('width', '100%');
			$('.youtube-player').css('height', '100%');
			$('.information-string').remove();
			setInformation(page.pageTime);
			getRotation = false;
			checkArrows(page, pages, pageLength);
		} else {
			$('.iframe-interaction').css('display', 'block');
			$('.information-string').remove();
			$('.iframe-interaction').html("<iframe class='interaction' src='" + page.pageContent[0].content + "'></iframe>")
			$('.iframe-interaction').css('height', '100%');
			$('.interaction').css('height', '100%');
			stopVideo();
			setHighlight();
			$('.information-text').append('<p class="information-string">' + page.pageTime[0].time[0].informationText + '</p>');
			getRotation = true;
			checkArrows(page, pages, pageLength);
			readDeviceOrientation();
		}
	} else {
		stopVideo();
		$('.youtube-player').css('display', 'none');
		$('.iframe-interaction').css('display', 'none');
		$('.content-container').css('display', 'block');
		$('.construction-text').css('display', 'block');
		$('.information-string').remove();
	}
	return index = page.id;
}

function setHeadline(id, pageName) {
	let indexNumeration = "#" + id;
	$(".subheadline").html(pageName);
	$('.toggleSub').removeClass('active-infos');
	$(indexNumeration).addClass('active-infos');
}

function checkArrows(chapterIndex, liCount, liLength) {
	if (liCount[0] == chapterIndex) {
		$('.next').css('opacity', '1');
		$('.prev').css('opacity', '0');
	} else if (liCount[liLength] == chapterIndex) {
		$('.next').css('opacity', '0');
		$('.prev').css('opacity', '1');
	} else {
		$('.next').css('opacity', '1');
		$('.prev').css('opacity', '1');
	}
}

function setInformation(pageInformation) {
	startInterval(pageInformation);
}
