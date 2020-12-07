import anime from 'animejs/lib/anime.es'
import "sticky-kit/dist/sticky-kit";
const $ = require( "jquery" );
const Swiper = require("swiper");
const autosize = require("autosize");
const validator = require("validator");
const objectFitImages = require("object-fit-images");
const mediumZoom = require("medium-zoom");
const lazySizes = require("lazysizes");
const ScrollMagic = require("scrollmagic");

export const onInitialClientRender = () => {
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


    })
      
}