$(document).ready(function () {
	$('.proj-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
	});

	$('img, iframe').removeClass('hide');
});
