	$(".tab-content--pomoc").addClass('kupa');
    $(".tab-content--pomoc:first").removeClass('kupa').addClass('kupa1'); 


    /* if in tab mode */
    $(".tab--pomoc").click(function() {
    
      // $(".tab-content").hide();
      $(".tab-content--pomoc").removeClass('kupa1').addClass('kupa');
      var activeTab = $(this).attr("rel"); 
      // $("html, body").animate({ scrollTop: $('#section-help').offset().top }, 500);
      // $("#"+activeTab).fadeIn(700);    //fadein
      $("#"+activeTab).removeClass('kupa').addClass('kupa1');  

      $(".tab--pomoc").removeClass("active");
      $(this).addClass("active");

      $(".tab-drawer-heading").removeClass("d-active");
      $(".tab-drawer-heading[rel^='"+activeTab+"']").addClass("d-active");
      
    });
  /* if in drawer mode */
  $(".tab-drawer-heading").click(function() {
      
      // $(".tab-content").hide();
       $(".tab-content--pomoc").removeClass('kupa1').addClass('kupa');

      var d_activeTab = $(this).attr("rel"); 
      // $("#"+d_activeTab).slideDown(); //fadein
      $("#"+d_activeTab).removeClass('kupa').addClass('kupa1');  
    
    $(".tab-drawer-heading").removeClass("d-active");
      $(this).addClass("d-active");
    
    $(".tab--pomoc").removeClass("active");
    $(".tabs li[rel^='"+d_activeTab+"']").addClass("active");
    // $("html, body").animate({ scrollTop: $('.tab-container').offset().top - 50 }, 500);
    });