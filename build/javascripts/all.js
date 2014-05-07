/*!
 *
 *  Copyright (c) David Bushell | http://dbushell.com/
 *
 */

(function(window, document, undefined)
{

    // helper functions

    var trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    };

    var hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    };

    var addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    };

    var removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    };

    var hasParent = function(el, id)
    {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while((el = el.parentNode));
        }
        return false;
    };

    // normalize vendor prefixes

    var doc = document.documentElement;

    var transform_prop = window.Modernizr.prefixed('transform'),
        transition_prop = window.Modernizr.prefixed('transition'),
        transition_end = (function() {
            var props = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'OTransition'      : 'oTransitionEnd otransitionend',
                'msTransition'     : 'MSTransitionEnd',
                'transition'       : 'transitionend'
            };
            return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
        })();

    window.App = (function()
    {

        var _init = false, app = { };

        var inner = document.getElementById('inner-wrap'),

            nav_open = false,

            nav_class = 'js-nav';


        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;

            var closeNavEnd = function(e)
            {
                if (e && e.target === inner) {
                    document.removeEventListener(transition_end, closeNavEnd, false);
                }
                nav_open = false;
            };

            app.closeNav =function()
            {
                if (nav_open) {
                    // close navigation after transition or immediately
                    var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                    if (duration > 0) {
                        document.addEventListener(transition_end, closeNavEnd, false);
                    } else {
                        closeNavEnd(null);
                    }
                }
                removeClass(doc, nav_class);
            };

            app.openNav = function()
            {
                if (nav_open) {
                    return;
                }
                addClass(doc, nav_class);
                nav_open = true;
            };

            app.toggleNav = function(e)
            {
                if (nav_open && hasClass(doc, nav_class)) {
                    app.closeNav();
                } else {
                    app.openNav();
                }
                if (e) {
                    e.preventDefault();
                }
            };

            // open nav with main "nav" button
            document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);

            // close nav with main "close" button
            document.getElementById('nav-close-btn').addEventListener('click', app.toggleNav, false);

            // close nav by touching the partial off-screen content
            document.addEventListener('click', function(e)
            {
                if (nav_open && !hasParent(e.target, 'nav')) {
                    e.preventDefault();
                    app.closeNav();
                }
            },
            true);

            addClass(doc, 'js-ready');

        };

        return app;

    })();

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', window.App.init, false);
    }

})(window, window.document);
 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    // $(".tab-content").hide();
    // $(".tab-content:first").show();

    $(".tab-content").addClass('kupa');
    $(".tab-content:first").removeClass('kupa').addClass('kupa1');    


   // next prev controls
    // var active = $('.active');
    // var elements = $('.tabs li'), i = active.size() - 1;
    var active = $('.active'), elements = $('.tabs li'), i=0;

    
    function move(direction) {
        i = $('.active').index(); 
        if (direction == 'forward') i = ++i % elements.length; // wrap around
        if (direction == 'backward') i = --i % elements.length; // wrap around
        elements.eq(i).click();
      }

    $('.next').click(function(ev) {
        ev.preventDefault();
        move('forward');
      });
    $('.prev').click(function(ev) {
        ev.preventDefault();
        move('backward');
      });

  /* if in tab mode */
    $(".tabs li").click(function() {
    
      // $(".tab-content").hide();
      $(".tab-content").removeClass('kupa1').addClass('kupa');
      var activeTab = $(this).attr("rel"); 
      // $("html, body").animate({ scrollTop: $('#section-help').offset().top }, 500);
      // $("#"+activeTab).fadeIn(700);    //fadein
      $("#"+activeTab).removeClass('kupa').addClass('kupa1');  

      $(".tabs li").removeClass("active");
      $(this).addClass("active");

      $(".tab-drawer-heading").removeClass("d-active");
      $(".tab-drawer-heading[rel^='"+activeTab+"']").addClass("d-active");
      
    });
  /* if in drawer mode */
  $(".tab-drawer-heading").click(function() {
      
      // $(".tab-content").hide();
       $(".tab-content").removeClass('kupa1').addClass('kupa');

      var d_activeTab = $(this).attr("rel"); 
      // $("#"+d_activeTab).slideDown(); //fadein
      $("#"+d_activeTab).removeClass('kupa').addClass('kupa1');  
    
    $(".tab-drawer-heading").removeClass("d-active");
      $(this).addClass("d-active");
    
    $(".tabs li").removeClass("active");
    $(".tabs li[rel^='"+d_activeTab+"']").addClass("active");
    $("html, body").animate({ scrollTop: $('.tab-container').offset().top - 50 }, 500);
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  // $('.tabs li').last().addClass("tab-last");
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
var lastId,
    topMenu = $("#nav ul"),
    // topMenuHeight = topMenu.outerHeight()+40,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   // var fromTop = $(this).scrollTop()+topMenuHeight;
   var fromTop = $(this).scrollTop()+100;
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("nav-active")
         .end().filter("[href=#"+id+"]").parent().addClass("nav-active");
   }                   
});





$('.aha').click(function(e){
	$('.header').toggleClass('ahas');
	$('.content').toggleClass('ahasa');
	e.preventDefault();
});


$('.nav').find('li').first().addClass('nav-active');
