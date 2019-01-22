///////////////////////////
// Show hide "Contact Us" form
document.getElementById("envelope").addEventListener("click", function () {
	//console.log('hello');
	$('#contacts').slideToggle();
	//$('#myid').addClass('disp');
});
document.getElementById("btn-ft").addEventListener("click", function () {
	//console.log('hello');
	$('#contacts').slideToggle();
	//$('#myid').addClass('disp');
});

send_button.addEventListener("click", sendToMail); // Спасибо!
function sendToMail() {
	let mail_name = document.getElementById('mail_name').value;
	let mail_email = document.getElementById('mail_email').value;
	let mail_subject = document.getElementById('mail_subject').value;
	let mail_text = document.getElementById('mail_text').value;
	console.log(mail_name, mail_email, mail_subject, mail_text);

	const arrJson = {
		name_sender: mail_name,
		sender: mail_email,
		subject: mail_subject,
		message: mail_text
	};
	let str = JSON.stringify(arrJson);
	console.log(str);

	var xhr = new XMLHttpRequest();
	//xhr.open("POST", 'http://192.168.50.11/ords/inet/mail/debug', true)
	//xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	// Отсылаем объект в формате JSON и с Content-Type application/json
	// Сервер должен уметь такой Content-Type принимать и раскодировать
	xhr.send(str);
}

(function($) {
	"use strict"
	///////////////////////////
	// Connect input validator

	///////////////////////////
	// Select languages button
	    $(function(){
            $('.translate').click(function(){
                var lang = $(this).attr('id');

                $('.lang').each(function(index, element){
                    $(this).text(arrLang[lang][$(this).attr('key')]);
                });
            });
        });
	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		console.log('this on scroll:'+this);

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
		// Fixed nav languages planet color
		wScroll > 1 ? $('#planet').removeClass('invert-color') : $('#planet').addClass('invert-color');

		wScroll > 1 ? $('#lng').removeClass('colorwht') : $('#lng').addClass('colorwht');
		wScroll > 1 ? $('#lng').addClass('colorblk') : $('#lng').removeClass('colorblk');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : false,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});


})(jQuery);
