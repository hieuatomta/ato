import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

declare const jQuery: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-header-client',
  styleUrls: ['./client-header.component.scss'],
  templateUrl: './client-header.component.html',
})
export class ClientHeaderComponent implements OnInit, OnDestroy {
  ngOnInit() {
    (function ($) {
      let posWrapHeader;
      /*==================================================================
          [ Fixed Header ]*/
      const headerDesktop = $('.container-menu-desktop');
      const wrapMenu = $('.wrap-menu-desktop');

      if ($('.top-bar').length > 0) {
        posWrapHeader = $('.top-bar').height();
      } else {
        posWrapHeader = 0;
      }


      if ($(window).scrollTop() > posWrapHeader) {
        console.log(posWrapHeader);
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top', 0);
      } else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
      }

      $(window).on('scroll', function () {
        if ($(this).scrollTop() > posWrapHeader) {
          console.log(posWrapHeader);

          $(headerDesktop).addClass('fix-menu-desktop');
          $(wrapMenu).css('top', 0);
        } else {
          $(headerDesktop).removeClass('fix-menu-desktop');
          $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
        }
      });


      /*==================================================================
      [ Menu mobile ]*/
      $('.btn-show-menu-mobile').on('click', function () {
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
      });

      const arrowMainMenu = $('.arrow-main-menu-m');

      for (let i = 0; i < arrowMainMenu.length; i++) {
        $(arrowMainMenu[i]).on('click', function () {
          $(this).parent().find('.sub-menu-m').slideToggle();
          $(this).toggleClass('turn-arrow-main-menu-m');
        });
      }

      $(window).resize(function () {
        if ($(window).width() >= 992) {
          if ($('.menu-mobile').css('display') === 'block') {
            $('.menu-mobile').css('display', 'none');
            $('.btn-show-menu-mobile').toggleClass('is-active');
          }

          $('.sub-menu-m').each(function () {
            if ($(this).css('display') === 'block') {
              console.log('hello');
              $(this).css('display', 'none');
              $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
            }
          });

        }
      });

      /*==================================================================
   [ Cart ]*/
      $('.js-show-cart').on('click', function () {
        $('.js-panel-cart').addClass('show-header-cart');
      });

      $('.js-hide-cart').on('click', function () {
        $('.js-panel-cart').removeClass('show-header-cart');
      });

      /*==================================================================
      [ Cart ]*/
      $('.js-show-sidebar').on('click', function () {
        $('.js-sidebar').addClass('show-sidebar');
      });

      $('.js-hide-sidebar').on('click', function () {
        $('.js-sidebar').removeClass('show-sidebar');
      });

      /*==================================================================
      [ +/- num product ]*/
      $('.btn-num-product-down').on('click', function () {
        const numProduct = Number($(this).next().val());
        if (numProduct > 0) $(this).next().val(numProduct - 1);
      });

      $('.btn-num-product-up').on('click', function () {
        const numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
      });

      /*==================================================================
     [ Slick1 ]*/
      $('.wrap-slick1').each(function () {
        const wrapSlick1 = $(this);
        const slick1 = $(this).find('.slick1');


        const itemSlick1 = $(slick1).find('.item-slick1');
        const layerSlick1 = $(slick1).find('.layer-slick1');
        const actionSlick1 = [];


        $(slick1).on('init', function () {
          const layerCurrentItem = $(itemSlick1[0]).find('.layer-slick1');

          for (let i = 0; i < actionSlick1.length; i++) {
            clearTimeout(actionSlick1[i]);
          }

          $(layerSlick1).each(function () {
            $(this).removeClass($(this).data('appear') + ' visible-true');
          });

          for (let i = 0; i < layerCurrentItem.length; i++) {
            actionSlick1[i] = setTimeout(function (index) {
              $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
            }, $(layerCurrentItem[i]).data('delay'), i);
          }
        });


        let showDot = false;
        if ($(wrapSlick1).find('.wrap-slick1-dots').length > 0) {
          showDot = true;
        }

        $(slick1).slick({
          pauseOnFocus: false,
          pauseOnHover: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 1000,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 6000,
          arrows: true,
          appendArrows: $(wrapSlick1),
          prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
          nextArrow: '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
          dots: showDot,
          appendDots: $(wrapSlick1).find('.wrap-slick1-dots'),
          dotsClass: 'slick1-dots',
          customPaging: function (slick, index) {
            const linkThumb = $(slick.$slides[index]).data('thumb');
            const caption = $(slick.$slides[index]).data('caption');
            return '<img src="' + linkThumb + '">' +
              '<span class="caption-dots-slick1">' + caption + '</span>';
          },
        });

        $(slick1).on('afterChange', function (event, slick, currentSlide) {

          const layerCurrentItem = $(itemSlick1[currentSlide]).find('.layer-slick1');

          for (let i = 0; i < actionSlick1.length; i++) {
            clearTimeout(actionSlick1[i]);
          }

          $(layerSlick1).each(function () {
            $(this).removeClass($(this).data('appear') + ' visible-true');
          });

          for (let i = 0; i < layerCurrentItem.length; i++) {
            actionSlick1[i] = setTimeout(function (index) {
              $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
            }, $(layerCurrentItem[i]).data('delay'), i);
          }

        });

      });

      /*==================================================================
      [ Slick2 ]*/
      $('.wrap-slick2').each(function () {
        $(this).find('.slick2').slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 6000,
          arrows: true,
          appendArrows: $(this),
          prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      });


      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        const nameTab = $(e.target).attr('href');
        $(nameTab).find('.slick2').slick('reinit');
      });

      /*==================================================================
      [ Slick3 ]*/
      $('.wrap-slick3').each(function () {
        $(this).find('.slick3').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 6000,

          arrows: true,
          appendArrows: $(this).find('.wrap-slick3-arrows'),
          prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

          dots: true,
          appendDots: $(this).find('.wrap-slick3-dots'),
          dotsClass: 'slick3-dots',
          customPaging: function (slick, index) {
            const portrait = $(slick.$slides[index]).data('thumb');
            return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
          },
        });
      });

    })(jQuery);
  }

  ngOnDestroy() {
  }
}
