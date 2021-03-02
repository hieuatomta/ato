import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import * as moment from 'moment';
import {TranslateService} from '@ngx-translate/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'ngx-column-grid-import',
  templateUrl: './column-grid-import.component.html',
  styleUrls: ['./column-grid-import.component.scss']
})
export class ColumnGridImportComponent implements OnInit, OnChanges {

  moment = moment;
  @Input() rows: any = [];
  @Output() rowsChange = new EventEmitter();

  @Input() columns: any;
  @Input() mapRef: any;
  @Input() page: any;
  @Input() editing: any = [];

  @Output() onSetPage = new EventEmitter();
  @Output() onAddRow = new EventEmitter();

  addRowFlg = false;
  @Input() reportId: any;
  @Input() dataTime: any;
  currentRows: any = [];
  @ViewChild('table', {static: false}) table: DatatableComponent;
  currentTheme: any = 'dark';

  constructor(
    // protected configRegportService: ConfigReportService,
    //           protected toastrService: ToasterService,
    //           private dashboardService: DashboardService,
              private translate: TranslateService,
              private dialogService: NbDialogService) {
  }

  ngOnInit() {
    // this.dashboardService.currentTheme.subscribe(e => {
    //   if (e && this.currentTheme !== e) {
    //     this.currentTheme = e;
    //   }
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  setPage($event: any) {
    this.onSetPage.emit($event);
    this.editing = [];
  }

  confirmRemoveRow(row, index?) {
    // // const ref = this.dialogService.open(ConfirmDialogComponent, {
    // //   autoFocus: true,
    // //   context: {
    // //     message: `Xác nhận xóa?`
    // //   },
    // // });
    // ref.onClose.subscribe(res => {
    //   if (res) {
    //     this.removeRow(row, index);
    //   }
    // });
  }

  removeRow(row, index?) {
    if (!row[this.getPrimaryKey()]) {
      this.rows.splice(index, 1);
      this.editing.splice(index, 1);
      this.rows = [...this.rows];
      return;
    }
    const data = {
      reportId: this.reportId,
      dataTime: this.dataTime,
      mapValue: row
    };
    // Check dataType has DATE type
    const dateColumn = this.columns.find(e => e.dataType === 'DATE');
    if (dateColumn) {
      data.mapValue[dateColumn.columnName] = moment(data.mapValue[dateColumn.columnName]).format('YYYY-MM-DD');
    }
    // this.configRegportService.deleteRowData(data).subscribe((res: any) => {
    //   if (this.rows.length === 1 && this.table.offset > 0) {
    //     this.table.offset--;
    //     this.page.pageNumber--;
    //   }
    //   this.toastrService.pop('success', 'Thông báo', this.translate.instant('nhapLieu.success.delete'));
    //   this.setPage({offset: this.page.pageNumber});
    // });
  }
  listStatus = [
    {name: 'common.state.0', code: 0},
    {name: 'common.state.1', code: 1},
    {name: 'common.state.2', code: 2},
    {name: 'common.state.3', code: 3},
  ];
  saveRow(row, rowIndex) {
    console.log(row);
    console.log(rowIndex);
    // if (!this.validRow(row)) return;
    // const data = {
    //   reportId: this.reportId,
    //   dataTime: this.dataTime,
    //   mapValue: row
    // };
    // // Check dataType has DATE type
    // const dateColumn = this.columns.find(e => e.dataType === 'DATE');
    // if (dateColumn) {
    //   data.mapValue[dateColumn.columnName] = moment(data.mapValue[dateColumn.columnName]).format('YYYY-MM-DD');
    // }
    // this.configRegportService.saveRowData(data).subscribe((res: any) => {
    //   if (dateColumn) {
    //     res.body.mapValue[dateColumn.columnName] = moment(res.body.mapValue[dateColumn.columnName], 'YYYY-MM-DD');
    //   }
    //   row = {
    //     ...res.body.mapValue
    //   };
    //   this.rows[rowIndex] = row;
    //   this.editing[rowIndex] = false;
    //   this.toastrService.pop('success', 'Thông báo', this.translate.instant('nhapLieu.success.edit'));
    //   this.onSetPage.emit({offset: this.page.pageNumber});
    //   this.addRowFlg = false;
    //   // this.rows = [...this.rows];
    // }, error => {
    //   this.toastrService.pop('error', `Lỗi`, error.error.message);
    // })
  }

  addRow() {
    const rowEditing = this.editing.some(e => !!e);
    // if (rowEditing) {
    //   this.toastrService.pop('error', `Lỗi`, `Bạn phải lưu row vừa thêm mới`);
    //   return;
    // }
    this.addRowFlg = true;
    this.onAddRow.emit();
  }

  getPrimaryKey() {
    return this.columns.find(e => e.isPrimaryKey).columnName;
  }

  edit(rowIndex) {
    const rowEditing = this.editing.some(e => !!e);
    // if (rowEditing) {
    //   this.toastrService.pop('error', `Lỗi`, `Bạn phải lưu row đang sửa`);
    //   return;
    // }
    this.editing[rowIndex] = Object.assign({}, this.rows[rowIndex]);
  }

  cancel(rowIndex) {
    if (!this.addRowFlg) {
      this.rows[rowIndex] = Object.assign({}, this.editing[rowIndex]);
      this.rows = [...this.rows];
      this.editing[rowIndex] = null;
    } else {
      this.addRowFlg = false;
      this.rows.splice(rowIndex, 1);
      this.page.totalElements--;
      this.editing.splice(rowIndex, 1);
      if (this.rows.length === 0 && this.page.pageNumber > 0) {
        this.page.pageNumber--;
        this.setPage({offset: this.page.pageNumber});
      } else {
        this.rows = [...this.rows];
      }
    }
  }


}
