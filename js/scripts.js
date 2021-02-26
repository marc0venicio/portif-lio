/** Menu principal */

$( document ).ready(function() {
   
	var btnMenuMobile = $('.menu');

	$('.btn-menumobile').on('click', function() {

		$('.menu ul').toggleClass('open');

	});

});



/**
 * Galeria
 */

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});