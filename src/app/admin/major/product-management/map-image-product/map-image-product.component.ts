import {Component, OnInit} from '@angular/core';
import {ColumnChangesService, DimensionsHelper, ScrollbarHelper} from '@swimlane/ngx-datatable';
import {NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';
import {TranslateService} from '@ngx-translate/core';
import {ObjectActionService} from '../../../../@core/services/object-action.service';
import {SizeService} from '../../../../@core/services/size.service';
import {ColorService} from '../../../../@core/services/color.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../../@core/services/products.service';
import {ConfirmDialogComponent} from '../../../../shares/directives/confirm-dialog/confirm-dialog.component';
import {Observable} from 'rxjs';
import {UploadFileService} from '../../../../@core/services/UploadFileService.service';

@Component({
  selector: 'ngx-map-module',
  templateUrl: './map-image-product.component.html',
  styleUrls: ['./map-image-product.component.scss'],
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
})
export class MapImageProductComponent implements OnInit {
  title: string;
  data: any;
  loading = false;
  rows;
  allData: any;
  selectedUI = [];
  selected = [];
  originalData = [];
  isLoad: boolean;
  page = {
    limit: 5,
    count: 0,
    offset: 0,
  };
  columns = [
    {name: 'common.table.item_image_link', prop: 'imageLink', flexGrow: 1},
    {name: 'common.table.item_color_image', prop: 'name', flexGrow: 1},
    {name: 'common.table.item_status', prop: 'status', flexGrow: 1.5},
    {name: 'common.table.item_description', prop: 'description', flexGrow: 1},
    {name: 'common.table.item_update_time', prop: 'updateTime', flexGrow: 1},
    {name: 'common.table.item_action', prop: 'action_btn', flexGrow: 1}
  ];
  lstRole1 = [];
  lstRole2 = [];
  inputProduct: any;

  constructor(public ref: NbDialogRef<MapImageProductComponent>,
              private uploadService: UploadFileService,
              private toastr: NbToastrService,
              private translate: TranslateService,
              private dialogService: NbDialogService,
              private toastrService: NbToastrService,
              private productsService: ProductsService,
  ) {
  }

  protected onSuccess(data: any | null): void {
    this.rows = data.list || [];
    this.selectedUI = [];
    console.log(data);
    console.log(this.lstRole1);
    console.log(this.lstRole2);
    this.selected.map(value => {
      this.rows.map((value1) => {
        if (value === value1.id) {
          this.selectedUI.push(value1);
        }
      });
    });
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.loading = true;
    this.inputProduct = new FormGroup({
      idProduct: new FormControl(this.data?.id, []),
      amount: new FormControl(null, [Validators.required]),
      idSize: new FormControl(null, [Validators.required]),
      idColor: new FormControl(null, [Validators.required]),
    });
    this.search();
  }

  toAstrError() {
    this.toastr.success(this.translate.instant('common.table.unknown_error'),
      this.translate.instant('common.title_notification'));
  }

  search() {
    this.loading = true;
    this.productsService.doSearchByCode(this.data?.id).subscribe(res => {
        console.log(res);
        this.onSuccess(res.body.data);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      });
  };

  cancel() {
    this.ref.close();
  }

  deleteSizeColor(data) {
    console.log(data);
    this.dialogService.open(ConfirmDialogComponent, {
      context: {
        title: this.translate.instant('common.title_notification'),
        message: this.translate.instant('products.title_delete') + ' ' + data.nameColor + ' - ' + data.nameSize
      },
    }).onClose.subscribe(res => {
      if (res) {
        this.isLoad = true;
        this.productsService.deleteSizeColor(data.id).subscribe(() => {
          this.toastrService.success(this.translate.instant('products.delete_success'),
            this.translate.instant('common.title_notification'));
          this.search();
          this.isLoad = false;
        }, (err) => {
          this.toastrService.success(err.detail),
            this.translate.instant('common.title_notification');
          this.isLoad = false;
        });
      }
    });
  }


  // upload ts
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      (res) => {
        console.log(res);
        this.message = res.body.data;
      },
      (error) => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
        // this.isLoad = false;
      },
      // () => this.isLoad = false,
    );

    this.selectedFiles = undefined;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
