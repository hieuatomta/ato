import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsService} from '../../@core/services/products.service';
import {HttpHeaders} from '@angular/common/http';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-list-product',
  styleUrls: ['./list-product.component.scss'],
  templateUrl: './list-product.component.html',
})
export class ListProductComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.search(0);
  }

  ngOnDestroy(): void {
  }

  constructor(public productsService: ProductsService) {

  }

  isLoad: any;
  pageOfItems: Array<any>;
  rows: any;
  page = {
    limit: 10,
    count: 0,
    offset: 0,
  };
  data: {
    image: any;
    name: any;
    price: any;
  };

  search(pageToLoad: number) {
    this.isLoad = true;
    this.page.offset = pageToLoad;
    this.productsService.doSearch({
      page: this.page.offset,
      size: this.page.limit
    }, {status: 0}).subscribe(
      (res) => {
        this.onSuccess(res.body.data, res.headers, pageToLoad);
      },
      (error) => {
        this.isLoad = false;
      },
      () => this.isLoad = false,
    );
  }

  protected onSuccess(data: any | null, headers: HttpHeaders, page: number): void {
    // this.page.count = data.totalPages;
    // this.page.offset = page || 0;
    console.log(data);
    this.rows = data.list || [];
    console.log(this.rows);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
