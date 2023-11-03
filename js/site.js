$(document).ready(function () {
	$('.proj-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
	});

	$('img, iframe, video').removeClass('hide');

	$('.value-multiplier strong').each(function (i, elem) {
		var limit = parseInt($(elem).attr('limit'));
		setCounter(0, limit, elem);
	});
});

let setCounter = function (count, limit, elem) {
	var i = setInterval(() => {
		count++;
		elem.innerHTML = count + '%';
		if (count >= limit) {
			count = 0;
			clearInterval(i);
		}
	}, 10);
}
