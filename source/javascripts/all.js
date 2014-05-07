//=require "nav.js"
//=require "tabs.js"
//=require "scroll.js"
//=require "scrollspy.js"

$('.aha').click(function(e){
	$('.header').toggleClass('ahas');
	$('.content').toggleClass('ahasa');
	e.preventDefault();
});


$('.nav').find('li').first().addClass('nav-active');