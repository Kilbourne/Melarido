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
        (function respMenu(){ var $RMjQuery = jQuery.noConflict();
$RMjQuery(document).ready(function() {
    var isOpen = false;
    $RMjQuery(document).on('click', '#click-menu', function() {
        $RMjQuery('#responsive-menu').css('height', $RMjQuery(document).height());
        !isOpen ? openRM() : closeRM();
    });

    function openRM() {
        $RMjQuery('#responsive-menu').css('display', 'block');
        $RMjQuery('#responsive-menu').addClass('RMOpened');
        $RMjQuery('#click-menu').addClass('click-menu-active');
        $RMjQuery('#responsive-menu').stop().animate({
            left: "0"
        }, 500, 'linear', function() {
            $RMjQuery('#responsive-menu').css('height', $RMjQuery(document).height());
            isOpen = true;
        });
    }

    function closeRM() {
        $RMjQuery('#responsive-menu').animate({
            left: -$RMjQuery('#responsive-menu').width()
        }, 500, 'linear', function() {
            $RMjQuery('#responsive-menu').css('display', 'none');
            $RMjQuery('#responsive-menu').removeClass('RMOpened');
            $RMjQuery('#click-menu').removeClass('click-menu-active');
            isOpen = false;
        });
    }
    $RMjQuery(window).resize(function() {
        $RMjQuery('#responsive-menu').stop(true, true);
        $RMjQuery('#responsive-menu').css('height', $RMjQuery(document).height());
        if ($RMjQuery(window).width() > 800) {
            if ($RMjQuery('#responsive-menu').css('left') != -$RMjQuery('#responsive-menu').width()) {
                closeRM();
            }
        }
    });
    $RMjQuery('#responsive-menu ul ul').css('display', 'none');
    $RMjQuery('#responsive-menu .current_page_ancestor.menu-item-has-children').children('ul').css('display', 'block');
    $RMjQuery('#responsive-menu .current-menu-ancestor.menu-item-has-children').children('ul').css('display', 'block');
    $RMjQuery('#responsive-menu .current-menu-item.menu-item-has-children').children('ul').css('display', 'block');
    $RMjQuery('#responsive-menu .current_page_ancestor.page_item_has_children').children('ul').css('display', 'block');
    $RMjQuery('#responsive-menu .current-menu-ancestor.page_item_has_children').children('ul').css('display', 'block');
    $RMjQuery('#responsive-menu .current-menu-item.page_item_has_children').children('ul').css('display', 'block');
    var clickLink = '<span class=\"appendLink rm-append-inactive\">&#x25BC;</span>';
    var clickedLink = '<span class=\"appendLink rm-append-active\">&#x25B2;</span>';
    $RMjQuery('#responsive-menu .responsive-menu li').each(function() {
        if ($RMjQuery(this).children('ul').length > 0) {
            if ($RMjQuery(this).find('> ul').css('display') == 'none') {
                $RMjQuery(this).prepend(clickLink);
            } else {
                $RMjQuery(this).prepend(clickedLink);
            }
        }
    });
    $RMjQuery('.appendLink').on('click', function() {
        $RMjQuery(this).nextAll('#responsive-menu ul ul').slideToggle();
        $RMjQuery(this).html($RMjQuery(this).hasClass('rm-append-active') ? '&#x25BC;' : '&#x25B2;');
        $RMjQuery(this).toggleClass('rm-append-active rm-append-inactive');
        $RMjQuery('#responsive-menu').css('height', $RMjQuery(document).height());
    });
    $RMjQuery('.rm-click-disabled').on('click', function() {
        $RMjQuery(this).nextAll('#responsive-menu ul ul').slideToggle();
        $RMjQuery(this).siblings('.appendLink').html($RMjQuery(this).hasClass('rm-append-active') ? '&#x25BC;' : '&#x25B2;');
        $RMjQuery(this).toggleClass('rm-append-active rm-append-inactive');
        $RMjQuery('#responsive-menu').css('height', $RMjQuery(document).height());
    });
    $RMjQuery('.rm-append-inactive').siblings('ul').css('display', 'none');
});
})();

function matchH(){
    var elements=$('.servizio.bambini img,.servizio.allestimenti img,.servizio.adulti>div');

    var maxHeight = Math.max.apply(null, elements.map(function ()
    {
        return $(this).height();
    }).get());



    elements.each(function(index, el) {
      var h = (maxHeight - $(el).height())/2;
      var servizio = $(el).closest('.servizio');
      var desc=servizio.find('.text-container');
      desc.css('marginTop',h);
      desc.css('marginBottom',h);
    });
  }
  enquire.register("screen and (min-width:50em)", {

    match : function() {

  setTimeout(function(){matchH();$('.servizio').matchHeight();}, 500);
  $(window).resize(matchH);

    },      // OPTIONAL
                                // If supplied, triggered when the media query transitions
                                // *from an unmatched to a matched state*

    unmatch : function() {
      $('.servizio').matchHeight({ remove: true });
      $(window).off("resize",matchH);
    }
  });

        var mySwiper;
        enquire.register("screen and (max-width:1010px)", {

            match : function() {
            $('.lista-artisti').addClass('swiper-wrapper');
            $('.lista-artisti>div').addClass('swiper-slide');
             mySwiper = new Swiper('.artisti-wrapper', {
                  autoplay:2000
                  ,slidesPerView: 'auto'
                  ,autoplayDisableOnInteraction:true
                  ,nextButton:'#artisti .swiper-button-next'
                  ,prevButton:'#artisti .swiper-button-prev'
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
              $('.artisti-wrapper').off('mouseenter mouseleave');
              if(mySwiper.destroy)mySwiper.destroy(true,true);
              $('.lista-artisti').removeClass('swiper-wrapper');
              $('.lista-artisti>div').removeClass('swiper-slide');

            },

        });
        mySwiper1 = new Swiper('.eventi-wrapper', {
                  autoplay:2000
                  ,slidesPerView: 'auto'
                  ,autoplayDisableOnInteraction:true
                  ,nextButton:'#eventi .swiper-button-next'
                  ,prevButton:'#eventi .swiper-button-prev'
        });
        $('.eventi-wrapper').hover(
                function() {
                  mySwiper1.stopAutoplay();
                }, function() {
                  mySwiper1.startAutoplay();
                }

              );
        /*
        $('.lista-artisti').magnificPopup({
            delegate: '.ajax-popup-link', // child items selector, by clicking on it popup will open
            type: 'ajax'
            // other options
        });
*/
         $('.servizio-more').magnificPopup({

            type: 'ajax'
            // other options
        });
         $('.evento').magnificPopup({

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
