import {Component, OnInit} from '@angular/core';
import {
  DimensionsHelper,
  ScrollbarHelper,
  ColumnChangesService
} from "@swimlane/ngx-datatable";
import {NbDialogRef, NbToastrService} from "@nebular/theme";
import {TranslateService} from "@ngx-translate/core";
import {ActionService} from '../../../../@core/services/action.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'ngx-map-module',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss'],
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
})
export class MapPopupComponent implements OnInit {
  title: string;
  data: any;
  paramSearch = {code: null, status: 1}
  columns = [
    {prop: 'selected', name: '', flexGrow: 0.3, headerCheckboxable: true, checkboxable: true},
    {prop: 'index', name: 'common.table.item_number', flexGrow: 0.2, headerCheckboxable: false, checkboxable: false},
    {prop: 'code', name: 'common.table.item_objects_code', flexGrow: 1, headerCheckboxable: false, checkboxable: false},
    {prop: 'name', name: 'common.table.item_objects_name', flexGrow: 1, headerCheckboxable: false, checkboxable: false},
    {prop: 'updateTime', name: 'common.table.item_update_time', flexGrow: 1, headerCheckboxable: false, checkboxable: false},
    {prop: 'status', name: 'common.table.item_status', flexGrow: 1, headerCheckboxable: false, checkboxable: false}
  ];
  rows;
  selectedUI = [];
  selected = [];
  originalData = [];


  constructor(private ref: NbDialogRef<MapPopupComponent>,
              private toastr: NbToastrService,
              private translate: TranslateService,
              private actionService: ActionService,
              // private moduleActionService: ModuleActionService
  ) {
  }

  protected onSuccess(data: any | null): void {
    this.rows = data || [];
    this.selectedUI = [];
    this.selected.map(value => {
      this.rows.map((value1) => {
        if (value === value1.id) {
          this.selectedUI.push(value1);
        }
      })
    })
  }

  ngOnInit(): void {
    console.log(this.data.id);
    // this.moduleActionService.getAllByModuleId({id: this.data.id}).subscribe(
    //   data => {
    //     this.originalData = data.body;
    //     data.body.map(value => {
    //       this.selected.push(value.actionId);
    //     });
    //   },
    //   (error) => this.toAstrError(),
    //   () => this.search(),
    // )

  }

  toAstrError() {
    this.toastr.success(this.translate.instant('common.table.unknown_error'),
      this.translate.instant('common.title_notification'));
  }

  onSelect({selected}) {
    this.selectedUI = [];
    this.selectedUI.push(...selected);
    this.rows.map((value) => {
      this.selected.map((value1, index) => {
        if (value.id === value1) {
          this.selected.splice(index, index + 1);
        }
      })
    })
    selected.map(value => this.selected.push(value.id));
  }

  isLoad: boolean;

  search() {
    this.actionService.query().subscribe(res => {
      this.rows = res.body.data.list || []
    } );
  }

  submit() {
    const listUncheck = [];
    const listAdd = [];
    this.originalData.map(value => {
      let isUncheck = true;
      this.selected.map((select, index) => {
        if (value.actionId === select) {
          this.selected.splice(index, index + 1);
          isUncheck = false;
        }
      })
      if (isUncheck) {
        listUncheck.push(value);
      }
    })
    this.selected.map(value => {
      listAdd.push({moduleId: this.data.id, actionId: value})
    })
    // this.moduleActionService.delete(listUncheck).subscribe(
    //   success => {
    //     this.moduleActionService.insert(listAdd).subscribe(
    //       res => this.ref.close('success'),
    //       error => this.toAstrError(),
    //     )
    //   },
    //   error => this.toAstrError(),
    // )
  }

  cancel() {
    this.ref.close();
  }
}
