import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastrService} from '../../../../@core/mock/toastr-service';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';
import {SizeService} from '../../../../@core/services/size.service';
import {TranslateService} from '@ngx-translate/core';
import {TreeviewConfig, TreeviewItem} from 'ngx-treeview';
import {ObjectsService} from '../../../../@core/services/objects.service';
import {ColorService} from '../../../../@core/services/color.service';
import {ProductsService} from '../../../../@core/services/products.service';
import {ColumnChangesService, DimensionsHelper, ScrollbarHelper} from '@swimlane/ngx-datatable';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-size-update',
  styleUrls: ['./products-update.component.scss'],
  templateUrl: './products-update.component.html',
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
})
export class ProductsUpdateComponent implements OnInit {
  lstRole = [];
  listStatus = [
    {name: 'common.status.1', code: 1},
    {name: 'common.status.0', code: 0}
  ];
  inputProduct: any;
  inputSizeColor: any;
  itemRoles: any;
  loading = false;
  title: string;
  data: any;
  lstRole1 = [];
  lstRole2 = [];
  item: TreeviewItem[] = [];
  treeViewConfig = TreeviewConfig.create({
    hasFilter: true,
    hasAllCheckBox: false,
    maxHeight: 300,
    hasCollapseExpand: true,
  });
  rows = [];

  columns = [
    {name: 'common.table.item_product_size', prop: 'size', flexGrow: 1},
    {name: 'common.table.item_product_color', prop: 'color', flexGrow: 1.5},
    {name: 'common.table.item_product_total', prop: 'amount', flexGrow: 1},
  ];

  arr = [];


  constructor(
    private objectsService: ObjectsService,
    private toastr1: ToastrService,
    private toastr: NbToastrService,
    private translate: TranslateService,
    public ref: NbDialogRef<ProductsUpdateComponent>,
    private sizeService: SizeService,
    private productsService: ProductsService,
    private colorService: ColorService,
  ) {
  }


  ngOnInit(): void {
    this.inputProduct = new FormGroup({
      id: new FormControl(this.data?.id, []),
      name: new FormControl(null, []),
      code: new FormControl(null, []),
      cost: new FormControl(null, []),
      description: new FormControl(null, []),
      productSizeColorList: new FormControl(null, []),
      status: new FormControl(null, []),
      amount: new FormControl(null, []),
      size: new FormControl(null, []),
      color: new FormControl(null, []),
      parenObject: new FormControl(this.data?.parenId ? this.data.parenId === 0 ? null : this.data.parenId : null, [])
    });
    this.inputProduct.get('status').setValue(true);
    if (this.data) {
      this.inputProduct.patchValue(this.data);
      const status = this.data.status === 1 ? true : false;
      this.inputProduct.get('status').patchValue(status);
    }
    ;

    this.sizeService.query().subscribe(res => {
      this.lstRole1 = res.body.data.list;
    }, err => {
      console.log(err);
    });
    this.colorService.query().subscribe(res => {
      this.lstRole2 = res.body.data.list;
    }, err => {
      console.log(err);
    });
    this.getParenTree(this.data?.type ? this.data.type : 1);

  };

  addSizeColor() {
    const test = {
      idColor: null,
      idSize: null,
      amount: null
    };
    test.idColor = this.inputProduct.get('color').value;
    test.idSize = this.inputProduct.get('size').value;
    test.amount = this.inputProduct.get('amount').value;
    this.arr.push(test);
    this.onSuccess(this.arr);
  }

  protected onSuccess(data: any | null): void {
    this.rows = data || [];
    console.log(this.rows);
  }

  parenIdChange($event) {
    this.inputProduct.get('parenObject').setValue($event);
  }


  getParenTree(e: Number) {
    this.loading = true;
    this.objectsService.query().subscribe(res => {
        const result = res.body.data.list.filter(function (hero) {
          return hero.type === e;
        });
        this.item = this.formatDataTree(result, 0);
      }, (error) => {
        this.loading = false;
      },
      () => this.loading = false);
  }

  formatDataTree(data, parenId) {
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      if (dataItem.parenId === parenId) {
        let children = [];
        if (dataItem.id != null) {
          children = this.formatDataTree(data, dataItem.id);
        }
        if (children.length > 0) {
          dataItem.children = children;
        } else {
          dataItem.children = null;
        }
        const dataTreeview = new TreeviewItem({text: dataItem.name, value: dataItem.id, children: dataItem.children});
        arr.push(dataTreeview);
      }
    }
    return arr;
  }


  submit() {
    this.inputProduct.get('status').patchValue(this.inputProduct.get('status').value ? 1 : 0);
    this.inputProduct.markAllAsTouched();
    if (this.inputProduct.valid) {
      this.loading = true;
      if (this.data == null) {
        this.inputProduct.get('productSizeColorList').setValue(this.rows);
        console.log(this.inputProduct.value);
        this.productsService.insert(this.inputProduct.value).subscribe(
          (value) => this.ref.close(value),
          (error) => {
            this.toastr.danger(error.error.detail, this.translate.instant('common.title_notification'));
            this.loading = false;
          },
          () => this.loading = false
        );
      } else {
        this.productsService.update(this.inputProduct.value).subscribe(
          (value) => this.ref.close(value),
          (error) => {
            this.toastr.danger(error.error.detail, this.translate.instant('common.title_notification'));
            this.loading = false;
          },
          () => this.loading = false,
        );
      }
    } else {
    }
  }

  cancel() {
    this.ref.close();
  }
}
