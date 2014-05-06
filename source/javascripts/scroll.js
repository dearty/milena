// if(!location.pathname.match('work')) {
	$("[role=navigation] a, .scroll").click(function(){
		var e;
		return e = $("body").find($(this).attr("href").split("/").pop()), $("html, body").animate({scrollTop: e.offset().top}, 750), !1;

	});
// }


// $(function() {
//   $("[role=navigation] a, .scroll").click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 750);
//         return false;
//       }
//     }
//   });
// });