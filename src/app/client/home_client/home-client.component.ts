import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

declare const jQuery: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-home-client',
  styleUrls: ['./home-client.component.scss'],
  templateUrl: './home-client.component.html',
})
export class HomeClientComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    (function ($) {
      /*==================================================================
 [ Isotope ]*/
      const $topeContainer = $('.isotope-grid');
      const $filter = $('.filter-tope-group');

      // filter items on button click
      $filter.each(function () {
        $filter.on('click', 'button', function () {
          const filterValue = $(this).attr('data-filter');
          $topeContainer.isotope({filter: filterValue});
        });

      });

      // init Isotope
      $(window).on('load', function () {
        const $grid = $topeContainer.each(function () {
          $(this).isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            animationEngine: 'best-available',
            masonry: {
              columnWidth: '.isotope-item'
            }
          });
        });
      });

      const isotopeButton = $('.filter-tope-group button');

      $(isotopeButton).each(function () {
        $(this).on('click', function () {
          for (let i = 0; i < isotopeButton.length; i++) {
            $(isotopeButton[i]).removeClass('how-active1');
          }

          $(this).addClass('how-active1');
        });
      });

      $('.js-show-filter').on('click', function () {
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if ($('.js-show-search').hasClass('show-search')) {
          $('.js-show-search').removeClass('show-search');
          $('.panel-search').slideUp(400);
        }
      });

      $('.js-show-search').on('click', function () {
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if ($('.js-show-filter').hasClass('show-filter')) {
          $('.js-show-filter').removeClass('show-filter');
          $('.panel-filter').slideUp(400);
        }
      });
    })(jQuery);

  }
}
