import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-home-client',
  styleUrls: ['./product-detail.component.scss'],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
