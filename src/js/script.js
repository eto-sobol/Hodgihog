$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1200,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false
			}
		}]
	});
});