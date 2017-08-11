$(function() {

  // hamburger menu animation

  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.nav-mobile').toggleClass('open');
    $('.mobile-nav-content').toggleClass('open');
    $('.mobile-nav-text').toggleClass('open');
    $('.nav-span').toggleClass('open');
	});

});
