import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

declare var $: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-home-client',
  styleUrls: ['./product-detail.component.scss'],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  key: any;
  obj: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.key = params['key'];
    });
    this.obj = null;
    console.log(this.key);
    for (let i = 0; i < this.lstData.length; i++) {
      if (this.lstData[i].code === this.key) {
        this.obj = this.lstData[i];
        console.log(this.lstData[i]);
        console.log(this.obj);
      }
    }
    if (this.obj === null) {
      // chuyen ve trang home bao loi ko tim thay san pham
    }
    console.log(this.obj);
  }

  lstData = [
    {
      code: 'sp01',
      image: [{link: 'assets/images/product-02.jpg'},
        {link: 'assets/images/product-01.jpg'},
        {link: 'assets/images/product-03.jpg'},
        {link: 'assets/images/product-04.jpg'},
        {link: 'assets/images/product-05.jpg'}],
      name: 'Herschel supply',
      price: '$35.31',
      type: 'women'
    },
    {
      code: 'sp02',
      image: 'assets/images/product-01.jpg',
      name: 'Only Check Trouser',
      price: '$25.50',
      type: 'shoes'
    },
    {
      code: 'sp03',
      image: 'assets/images/product-03.jpg',
      name: 'Classic Trench Coat',
      price: '$75.00',
      type: 'women'
    },
    {
      code: 'sp04',
      image: 'assets/images/product-04.jpg',
      name: 'Front Pocket Jumper',
      price: '$34.75',
      type: 'men'
    },
    {
      code: 'sp05',
      image: 'assets/images/product-05.jpg',
      name: 'Front Pocket Jumper',
      price: '$34.75',
      type: 'shoes'
    },
    {
      code: 'sp06',
      image: 'assets/images/product-07.jpg',
      name: 'Front Pocket Jumper',
      price: '$34.75',
      type: 'watches'
    },
    {
      code: 'sp07',
      image: 'assets/images/product-06.jpg',
      name: 'Front Pocket Jumper',
      price: '$34.75',
      type: 'men'
    },
    {
      code: 'sp08',
      image: 'assets/images/product-08.jpg',
      name: 'Front Pocket Jumper',
      price: '$34.75',
      type: 'watches'
    },
  ];


  ngOnInit(): void {
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
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      const nameTab = $(e.target).attr('href');
      $(nameTab).find('.slick2').slick('reinit');
    });
    $('.wrap-slick2').each(function () {
      console.log($(this));
      console.log($(this).find('.slick2'));
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
    $('.gallery-lb').each(function () { // the containers for all your galleries
      $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true
        },
        mainClass: 'mfp-fade'
      });
    });
  }
}
