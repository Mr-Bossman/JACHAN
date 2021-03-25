(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict
(function($) {
    
    $('.multilevel .dropdown-menu > *').on('mouseenter click', function(e) {
        
        var elem = $(this);
        
        // Hide all other dropdowns
        
        elem.parent().find('.dropdown-menu').removeClass('show');
        
        // Show the corresponding menu
        
        let menu = elem.find('.dropdown-menu').first();
        
        if (menu.length) {
            // This is a dropdown menu toggle. Show the menu
            // and prevent it from closing on click.
            menu.addClass('show');
            e.stopPropagation();
        }
        
    });
    
    $('body').click( function() {
        // When the body is clicked, hide all multilevel dropdowns.
        $('.multilevel .dropdown-menu').removeClass('show');
    });
    
})(jQuery);
var page = '/main'
function changePage(event) {
 if (!event) {
        event = window.event; // Older versions of IE use 
                              // a global reference 
                              // and not an argument.
    };

    var el = (event.target || event.srcElement);
    console.log(el.children[0].innerHTML);
    page = el.children[0].innerHTML;
    jQuery.get(page, function(data) {
    document.getElementById('content').innerHTML = marked(data);
    });
}
jQuery.get(page, function(data) {
    document.getElementById('content').innerHTML = marked(data);
});