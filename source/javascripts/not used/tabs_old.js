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