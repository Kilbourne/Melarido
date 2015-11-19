/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        var mySwiper;
        enquire.register("screen and (max-width:1010px)", {

            match : function() {
            $('.lista-artisti').addClass('swiper-wrapper');
            $('.lista-artisti>div').addClass('swiper-slide');
             mySwiper = new Swiper('.artisti-wrapper', {
                  autoplay:2000
                  ,slidesPerView: 'auto'
                  ,autoplayDisableOnInteraction:true
                  ,nextButton:'.swiper-button-next'
                  ,prevButton:'.swiper-button-prev'
              });

             $('.artisti-wrapper').hover(
                function() {
                  mySwiper.stopAutoplay();
                }, function() {
                  mySwiper.startAutoplay();
                }

              );

            },
            unmatch : function() {
              $('.artisti-wrapper').off('hover');
              if(mySwiper.destroy)mySwiper.destroy(true,true);
              $('.lista-artisti').removeClass('swiper-wrapper');
              $('.lista-artisti>div').removeClass('swiper-slide');

            },

        });
        mySwiper1 = new Swiper('.eventi-wrapper', {
                  autoplay:2000
                  ,slidesPerView: 'auto'
                  ,autoplayDisableOnInteraction:true
                  ,nextButton:'.swiper-button-next'
                  ,prevButton:'.swiper-button-prev'
        });
        $('.eventi-wrapper').hover(
                function() {
                  mySwiper.stopAutoplay();
                }, function() {
                  mySwiper.startAutoplay();
                }

              );
        $('.lista-artisti').magnificPopup({
            delegate: '.ajax-popup-link', // child items selector, by clicking on it popup will open
            type: 'ajax'
            // other options
        });
         $('.servizio-more').magnificPopup({

            type: 'ajax'
            // other options
        });
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
