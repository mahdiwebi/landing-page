
$(function () {


$(window).on('scroll' , () => {


if( $(window).scrollTop() > 10) {

	$('.navbar').addClass('active');
}else {

	$('.navbar').removeClass('active');
}
});


//smoth scroll to div
$('.navbar-collapse li a').click(function () {
  $('html, body').animate({

    scrollTop: $('#' + $(this).data('value')).offset().top
  }, 2000);
});



});








