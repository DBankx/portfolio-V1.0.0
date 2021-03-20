import anime from 'animejs/lib/anime.es'
import "sticky-kit/dist/sticky-kit";
import Swiper from 'swiper';
import SwiperCore, {Pagination} from "swiper";
import 'swiper/swiper-bundle.css';
import "imagesloaded/imagesloaded";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import mediumZoom from "medium-zoom";
const $ = require( "jquery" );
const autosize = require("autosize");
const validator = require("validator");
const objectFitImages = require("object-fit-images");
const lazySizes = require("lazysizes");
const ScrollMagic = require("scrollmagic");

SwiperCore.use([Pagination]);


export const onRouteUpdate = () => {
    $(document).ready(function(){

        var isMobile = false;
        if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('html').addClass('touch');
            isMobile = true;
        }
        else {
            $('html').addClass('no-touch');
            isMobile = false;
        }

        $('#devtree').popover({
            trigger: 'focus',
            animation: true,
        })

        $('#qlip').popover({
            trigger: 'focus',
            animation: true,
        })

        $('#intaviewer').popover({
            trigger: 'focus',
            animation: true,
        }) 
        /*-----------------------------------------------------------------
      Tooltip
    -------------------------------------------------------------------*/

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
            
        });
        
        /*-----------------------------------------------------------------
      Progress bar
    -------------------------------------------------------------------*/

        function progressBar() {
            $('.progress').each(function() {
                var ctrl = new ScrollMagic.Controller();
                new ScrollMagic.Scene({
                    triggerElement: '.progress',
                    triggerHook: 'onEnter',
                    duration: 300
                })
                    .addTo(ctrl)
                    .on("enter", function (e) {
                        var progressBar = $('.progress-bar');
                        progressBar.each(function(indx){
                            $(this).css({'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2'});
                        });
                    });
            });
        }


        /*-----------------------------------------------------------------
     Loaded
   -------------------------------------------------------------------*/

        anime({
            targets: 'body',
            opacity: 1,
            delay: 400,
            complete: function(anim) {
                progressBar(); //Init progress bar
            }
        });

        $('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
            preloader(); //Init preloader
        });

        function preloader() {
            var tl = anime.timeline({});
            tl
                .add({
                    targets: '.preloader',
                    duration: 1,
                    opacity: 1
                })
                .add({
                    targets: '.circle-pulse',
                    duration: 300,
                    //delay: 500,
                    opacity: 1,
                    zIndex: '-1',
                    easing: 'easeInOutQuart'
                },'+=500')
                .add({
                    targets: '.preloader__progress span',
                    duration: 500,
                    width: '100%',
                    easing: 'easeInOutQuart'
                },'-=500')
                .add({
                    targets: '.preloader',
                    duration: 500,
                    opacity: 0,
                    zIndex: '-1',
                    easing: 'easeInOutQuart'
                });
        };

   /*--------------------------------------------------------
    Loading projects
   ------------------------------------------------------------ */

        
        var tlp = anime.timeline({
            easing: "easeOutExpo",
            duration: 900,
            direction: "reverse",
        })
        
        tlp.add({
            targets: ".project-content",
            translateX: -250,
            direction: "reverse",
            opacity: [1, 0],
            easing: 'easeInElastic(1, .7)'
        })

        tlp.add({
            targets: ".project-box-image",
            translateX: 250,
            direction: "reverse",
            opacity: [1, 0],
            easing: 'easeInElastic(1, .7)',
        }, "-=900")



        /*-----------------------------------------------------------------
     Hamburger
   -------------------------------------------------------------------*/

        $('.hamburger').on('click', function() {
            $(this).toggleClass('is-active');
            $('.inner-menu').toggleClass('is-active');
            $('body').toggleClass('open-menu');
        });

        /*-----------------------------------------------------------------
      Nav
    -------------------------------------------------------------------*/

        var sideNavOpen = $('.hamburger');
        var sideNavTl = anime.timeline({autoplay: false});

        if (window.matchMedia("(max-width: 580px)").matches) {
            $('.js-menu').each(function(i) {
                sideNavTl
                    .add({
                        targets: '.nav',
                        duration: 1000,
                        width: ['0', '100%'],
                        opacity: [0, 1],
                        easing: 'easeInOutBack'
                    })
                    .add({
                        targets: '.nav__item',
                        duration: 200,
                        delay: anime.stagger(50),
                        opacity: [0, 1],
                        translateX: [70, 0],
                        easing: 'easeInOutBack'
                    },'-=500');
            });
        } else {
            $('.js-menu').each(function(i) {
                sideNavTl
                    .add({
                        targets: '.nav',
                        duration: 1000,
                        width: ['0', '100%'],
                        easing: 'easeInOutBack'
                    })
                    .add({
                        targets: '.nav__item',
                        duration: 200,
                        delay: anime.stagger(50),
                        opacity: [0, 1],
                        translateX: [70, 0],
                        easing: 'easeInOutBack'
                    },'-=500');
            });
        }

        $(sideNavOpen).on('click', function(e) {
            e.preventDefault();
            if (sideNavTl.began) {
                sideNavTl.reverse()
                sideNavTl.completed = false;
            }
            if (sideNavTl.paused) {
                sideNavTl.play()
            }
        });


        /*-----------------------------------------------------------------
            Sticky sidebar
        -------------------------------------------------------------------*/

        function activeStickyKit() {
            $('.sticky-column').stick_in_parent({
                parent: '.sticky-parent'
            });

            // bootstrap col position
            $('.sticky-column')
                .on('sticky_kit:bottom', function(e) {
                    $(this).parent().css('position', 'static');
                })
                .on('sticky_kit:unbottom', function(e) {
                    $(this).parent().css('position', 'relative');
                });
        };
        activeStickyKit();

        function detachStickyKit() {
            $('.sticky-column').trigger("sticky_kit:detach");
        };

        //  stop sticky kit
        //  based on your window width

        var screen = 1200;

        var windowHeight, windowWidth;
        windowWidth = $(window).width();
        if ((windowWidth < screen)) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }

        // windowSize
        // window resize
        function windowSize() {
            windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
            windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        }
        windowSize();

        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

        $(window).resize(debounce(function(){
            windowSize();
            $(document.body).trigger("sticky_kit:recalc");
            if (windowWidth < screen) {
                detachStickyKit();
            } else {
                activeStickyKit();
            }
        }, 250));

        /*-----------------------------------------------------------------
     Carousel
   -------------------------------------------------------------------*/

        // Testimonials
        $('.js-carousel-review').each(function() {
            var carousel = new Swiper('.js-carousel-review', {
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 300,
                grabCursor: true,
                watchOverflow: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    580: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    991: {
                        slidesPerView: 2
                    }
                },
            });
        });

        // Clients
        $('.js-carousel-clients').each(function() {
            var carousel = new Swiper('.js-carousel-clients', {
                slidesPerView: 4,
                spaceBetween: 30,
                //loop: true,
                grabCursor: true,
                watchOverflow: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: "bullets",

                },
                breakpoints: {
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    580: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                    991: {
                        slidesPerView: 6,
                        spaceBetween: 30
                    }
                } 
            });
        });

        /*-----------------------------------------------------------------
     Scroll indicator
   -------------------------------------------------------------------*/

        function scrollIndicator() {
            $(window).on('scroll', function() {
                var wintop = $(window).scrollTop(), docheight =
                    $(document).height(), winheight = $(window).height();
                var scrolled = (wintop/(docheight-winheight))*100;
                $('.scroll-line').css('width', (scrolled + '%'));
            });
        }

        scrollIndicator(); //Init


        /*-----------------------------------------------------------------
          ScrollTo
        -------------------------------------------------------------------*/

        function scrollToTop() {
            var $backToTop = $('.back-to-top'),
                $showBackTotop = $(window).height();

            $backToTop.hide();


            $(window).scroll( function() {
                var windowScrollTop = $(window).scrollTop();
                if( windowScrollTop > $showBackTotop ) {
                    $backToTop.fadeIn('slow');
                } else {
                    $backToTop.fadeOut('slow');
                }
            });

            $backToTop.on('click', function (e) {
                e.preventDefault();
                $(' body, html ').animate( {scrollTop : 0}, 'slow' );
            });
        }

        scrollToTop(); //Init


        /*-----------------------------------------------------------------
     Scroll indicator
   -------------------------------------------------------------------*/

        function scrollIndicator() {
            $(window).on('scroll', function() {
                var wintop = $(window).scrollTop(), docheight =
                    $(document).height(), winheight = $(window).height();
                var scrolled = (wintop/(docheight-winheight))*100;
                $('.scroll-line').css('width', (scrolled + '%'));
            });
        }

        scrollIndicator(); //Init


        /*-----------------------------------------------------------------
          ScrollTo
        -------------------------------------------------------------------*/

        function scrollToTop() {
            var $backToTop = $('.back-to-top'),
                $showBackTotop = $(window).height();

            $backToTop.hide();


            $(window).scroll( function() {
                var windowScrollTop = $(window).scrollTop();
                if( windowScrollTop > $showBackTotop ) {
                    $backToTop.fadeIn('slow');
                } else {
                    $backToTop.fadeOut('slow');
                }
            });

            $backToTop.on('click', function (e) {
                e.preventDefault();
                $(' body, html ').animate( {scrollTop : 0}, 'slow' );
            });
        }

        scrollToTop(); //Init


        /*-----------------------------------------------------------------
       mediumZoom
     -------------------------------------------------------------------*/

        mediumZoom('[data-zoom]', {
            margin: 30,
            background: "#000",
        });
        

    })

}