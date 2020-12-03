import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-list-product',
  styleUrls: ['./list-product.component.scss'],
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  data: {
    image: any;
    name: any;
    price: any;
  };

  lstData = [
    {
      code: 'sp01',
      image: 'assets/images/product-02.jpg',
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

  }
}
