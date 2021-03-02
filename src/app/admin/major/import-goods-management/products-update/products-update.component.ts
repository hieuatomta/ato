import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ToastrService} from '../../../../@core/mock/toastr-service';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SizeService} from '../../../../@core/services/size.service';
import {TranslateService} from '@ngx-translate/core';
import {TreeviewConfig, TreeviewItem} from 'ngx-treeview';
import {ObjectsService} from '../../../../@core/services/objects.service';
import {ColorService} from '../../../../@core/services/color.service';
import {ProductsService} from '../../../../@core/services/products.service';
import {ColumnChangesService, DimensionsHelper, ScrollbarHelper} from '@swimlane/ngx-datatable';
import {ColumnGridImportComponent} from './column-grid-import/column-grid-import.component';
import {Page} from '../../../../@core/model/page.model';
import * as moment from 'moment';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-size-update',
  styleUrls: ['./products-update.component.scss'],
  templateUrl: './products-update.component.html',
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
})
export class ProductsUpdateComponent implements OnInit {


  @ViewChild('inputElement', {static: false}) fileInput: ElementRef;
  @ViewChild('fileLabel', {static: false}) fileLabel: ElementRef;
  @ViewChild('columnGridImportComponent', {static: false}) columnGridImportComponent: ColumnGridImportComponent;


  lstRole = [];
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

  listStatus = [
    {name: 'common.state.0', code: 0},
    {name: 'common.state.1', code: 1},
    {name: 'common.state.2', code: 2},
    {name: 'common.state.3', code: 3},
  ];
  arr = [];


  constructor(
    private objectsService: ObjectsService,
    private toastr1: ToastrService,
    private toastr: NbToastrService,
    private translate: TranslateService,
    public ref: NbDialogRef<ProductsUpdateComponent>,
    private sizeService: SizeService,
    private colorService: ColorService,
    private productsService: ProductsService,
  ) {
  }


  ngOnInit(): void {
    this.inputProduct = new FormGroup({
      id: new FormControl(this.data?.id, []),
      name: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required]),
      cost: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
      status: new FormControl(this.data?.status === undefined ? this.translate.instant('common.state.1') : this.data?.status, [Validators.required]),
      objectsId: new FormControl(this.data?.objectsId, [Validators.required])
    });
    if (this.data) {
      this.inputProduct.patchValue(this.data);
    }
    this.getParenTree(this.data?.type ? this.data.type : 1);

  };

  parentIdChange($event) {
    this.inputProduct.get('objectsId').setValue($event);
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

  formatDataTree(data, parentId) {
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i];
      if (dataItem.parentId === parentId) {
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
    this.inputProduct.markAllAsTouched();
    if (this.inputProduct.valid) {
      this.loading = true;
      if (this.data == null) {
        this.inputProduct.get('status').setValue(1);
        this.productsService.insert(this.inputProduct.value).subscribe(
          (value) => this.ref.close(value),
          (error) => {
            this.toastr.danger(error.error.message, this.translate.instant('common.title_notification'));
            this.loading = false;
          },
          () => this.loading = false
        );
      } else {
        this.productsService.update(this.inputProduct.value).subscribe(
          (value) => this.ref.close(value),
          (error) => {
            this.toastr.danger(error.error.message, this.translate.instant('common.title_notification'));
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
  searchData(page, time, addRow) {

    if (!time) {
      this.inputProduct.get('importTime').markAsTouched();
      return;
    }

    const pageToLoad: number = page.pageNumber;
    // this.configRegportService.getData({
    //   // reportId: this.reportConfig.id,
    //   dataTime: moment(time).toISOString(),
    // }, {page: page.pageNumber, size: page.size}).subscribe((res: any) => {
    //   this.rows = res.body.lstObj.map(data => {
    //     const result = {};
    //     res.body.lstColumn.forEach((column, index) => {
    //       if (column.dataType === 'DATE' && data[index]) {
    //         result[column.columnName] = moment(data[index], 'YYYY-MM-DD').toDate();
    //       } else {
    //         result[column.columnName] = data[index];
    //       }
    //     });
    //     return result;
    //   });

      // const totalElements = Number(res.headers.get('X-Total-Count'));
      // this.page = new Page(Math.pow(2, 31) - 1, totalElements, this.totalPages(totalElements, Math.pow(2, 31) - 1), 0);
      this.editing = [];
      if (addRow) {
        this.addNewRow();
      }
      setTimeout(this.calcHeightDatatable, 100);
    // });
  }


  onAddRow() {
    if (this.page.totalPages > 1 && this.page.pageNumber !== this.page.totalPages - 1) {
      this.page.pageNumber = this.page.totalPages - 1;
      this.searchData(this.page, null, true);
      return;
    }
    this.addNewRow();
  }
  totalPages(totalElements, size) {
    const count = totalElements < 1 ? 1 : Math.ceil(totalElements / size);
    return Math.max(count || 0, 1);
  }
  addNewRow() {
    // this.page.totalElements = this.page.totalElements + 1;
    const newData = {};
    for (let i = 0; i < this.columns.length; i++) {
      newData[this.columns[i]] = null;
    }
    if (this.rows.length === this.page.size) {
      this.page.pageNumber++;
      this.page = new Page(5, this.page.totalElements, this.totalPages(this.page.totalElements, 5), this.page.pageNumber);
      this.rows = [newData];
      this.editing = [newData];
    } else {
      this.editing[this.rows.length] = newData;
      this.rows[this.rows.length] = newData;
    }
    this.rows = [...this.rows];
    const that = this
    setTimeout(function () {
      that.calcHeightDatatable()
    }, 2000);
  }
  collapseSearchFrm = false;
  editing = [];
  mapRef: any;
  columns: any = [
    {id: 6014, columnName: "id", title: "id", isRequire: 0, isTimeColumn: 0, isShow: 1, dataType: "BIGINT"},
    {id: 6015, columnName: "code", title: "Mã sản phẩm", isRequire: 0, isTimeColumn: 0, isShow: 1, dataType: "DOUBLE"},
    {id: 6015, columnName: "nameP", title: "Tên sản phẩm", isRequire: 0, isTimeColumn: 0, isShow: 1, dataType: "LONG"},
    {id: 6015, columnName: "price", title: "Giá nhập", isRequire: 0, isTimeColumn: 0, isShow: 1, dataType: "LONG"},
    {id: 6015, columnName: "size", title: "Kích thước", isRequire: 0, isTimeColumn: 0, isShow: 1, dataType: "DATE"},
    {id: 6015, columnName: "amount", title: "Số lượng", isRequire: 0, isTimeColumn: 0, isShow: 1, dataType: "LONG"},
    {id: 6015, columnName: "description", title: "Mô tả", isRequire: 0, isTimeColumn: 0, isShow: 1, dataType: "LONG"}


  ];
  rows1: any = [];
  page = new Page();


  calcHeightDatatable() {
    const dt = document.getElementById('column-grid-import') as HTMLElement;
    const dtBody = document.querySelector('#column-grid-import .datatable-body') as HTMLElement;
    const dtHeader = document.querySelector('#column-grid-import .datatable-header') as HTMLElement;
    const dtFooter = document.querySelector('#column-grid-import .datatable-footer') as HTMLElement;
    if (dt && dtBody && dtHeader && dtFooter) {
      dt.style.height = (window.innerHeight - (this.collapseSearchFrm ? 160 : 340) - 16) + 'px';
      const dtBodyHeight = dt.clientHeight - dtHeader.clientHeight - dtFooter.clientHeight;
      dtBody.style.height = dtBodyHeight + 'px';
    }
  }

  actionSetPage($event: any) {
    // this.setPage($event)

    const that = this
    setTimeout(function () {
      that.calcHeightDatatable()
    }, 2000);
  }
}
