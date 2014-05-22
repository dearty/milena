function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}




var stickyNavTop = $('header').outerHeight();
var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop>stickyNavTop) {
		$('header').addClass('sticky').find('.header--inner').addClass('no-border');


			
	}
	else {
		$('header').removeClass('sticky').find('.header--inner').removeClass('no-border');	
	}
}
//stickyNav();
$(window).scroll(debounce(function(event){
	stickyNav();
},250));
// $(window).scroll(function(){
// 	stickyNav();
// });