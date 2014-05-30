var Tabs = {

  tabsWrapClass:  '.tabs-wrap',
  tabsClass:      '.tab',
  tabContentClass:'.tab-content',
  tabsMobileClass: '.tab-drawer-heading',

  init: function() {

    this.initComponent();
    this.bindUIActions();

  },

  initComponent: function() {
    
    //keep a reference to this (Tabs) object.
    var self = this;

    $(this.tabsWrapClass).each(function(){

      var $el             = $(this);
      var effect          = $el.data('effeckt-type');
      var tabContents     = $el.find(self.tabContentClass);
      var firstTabContent = tabContents.first();
      var tabs            = $el.find(self.tabsClass);
      var tabsMobile      = $el.find(self.tabsMobileClass);

      tabs.removeClass('active').first().addClass('active');
      tabContents.not(':eq(0)').addClass('effeckt-hide');
      
      tabsMobile.removeClass('active').first().addClass('active');
      // tabContents.not(':eq(0)').addClass('effeckt-hide');


      firstTabContent.addClass('effeckt-show');
      tabContents.parent().height(firstTabContent.height());

    });

  },

  bindUIActions: function() {

    //keep a reference to this (Tabs) object.
    var self = this;
    if (Modernizr.touch) {   
        $(this.tabsClass).on('click', function(e) {
          e.preventDefault();
          self.showTab(this);
        });
        $(this.tabsMobileClass).on('click', function(e) {
          e.preventDefault();
          self.showTab(this);
        });
    }
    else {
      $(this.tabsClass).on('mouseover', function(e) {
        e.preventDefault();
        self.showTab(this);
      });
      $(this.tabsMobileClass).on('click', function(e) {
          e.preventDefault();
          self.showTab(this);
        });
      $(this.tabsClass).on('click', function(e) {
        e.preventDefault();
      });
    }

  },

  showTab: function(el) {

    var tab         = $(el);
    var tabsWrap    = tab.parents(this.tabsWrapClass);
    var tabs        = tabsWrap.find(this.tabsClass);
    var tabContents = tabsWrap.find(this.tabContentClass);
    var effect      = tabsWrap.data('effeckt-type');

    var tabsMobile  = tabsWrap.find(this.tabsMobileClass);
    
    //set active to this current clicked tab
    tabs.removeClass('active');
    tabsMobile.removeClass('active');

    tab.addClass('active');
    
    
   
    // tabsMobile.addClass('d-active');

    var tabID = tab.attr('href');
    var tabContent = tabContents.filter(tabID);

    tabContents.removeClass('effeckt-show').addClass('effeckt-hide');
    tabContent.addClass('effeckt-show');

    
    //rownolegle z mobile
    if(tab.is('.tab-drawer-heading')){
     $(".tab--pomoc[href='"+tabID+"']").addClass("active");
      $("html, body").animate({ scrollTop: $(".tab-drawer-heading.active").offset().top - 65 }, 700);
     
    }
    else {
     $(".tab-drawer-heading[href='"+tabID+"']").addClass("active");
     
    }


    //add parent height, just because of position: absolute;
    tabContents.parent().height(tabContent.height());
  }

};

$('.tab-content--proces').addClass('absolute');
$('.tab-content--pomoc').addClass('absolute-help');

Tabs.init();


