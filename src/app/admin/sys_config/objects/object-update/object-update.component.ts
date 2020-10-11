import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TreeviewConfig, TreeviewItem} from 'ngx-treeview';
import {TranslateService} from '@ngx-translate/core';
import {ObjectsService} from '../../../../@core/services/objects.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-object-update',
  styleUrls: ['./object-update.component.scss'],
  templateUrl: './object-update.component.html',
})
export class ObjectUpdateComponent implements OnInit {
  title: string;
  inputObject: FormGroup;
  data: any;
  loading = false;
  item: TreeviewItem[] = [];
  treeViewConfig = TreeviewConfig.create({
    hasFilter: true,
    hasAllCheckBox: false,
    maxHeight: 300,
    hasCollapseExpand: true,
  });

  constructor(protected ref: NbDialogRef<ObjectUpdateComponent>,
              private objectsService: ObjectsService,
              private toastr: NbToastrService,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.objectsService.getTreeParent().subscribe(data => {
      this.item = this.formatDataTree(data.body, 0);
    });

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

  initForm() {
    this.inputObject = new FormGroup({
      id: new FormControl(this.data?.id, []),
      code: new FormControl(this.data?.code, [Validators.required, Validators.maxLength(200)]),
      name: new FormControl(this.data?.name, [ Validators.required, Validators.maxLength(250)]),
      pathUrl: new FormControl(this.data?.pathUrl, [Validators.maxLength(500)]),
      icon: new FormControl(this.data?.icon, [Validators.maxLength(255)]),
      status: new FormControl(this.data?.status, [Validators.required]),
      description: new FormControl(this.data?.description, [Validators.maxLength(500)]),
      parentId: new FormControl(this.data?.parentId ? this.data.parentId === 0 ? null : this.data.parentId : null, [])
    }, {});
    this.inputObject.get('status').setValue(true);
    if (this.data) {
      this.inputObject.patchValue(this.data);
      const status = this.data.status === 1 ? true : false;
      this.inputObject.get('status').patchValue(status);
    };
  }
  parentIdChange($event) {
    this.inputObject.get('parentId').setValue($event);
  }
  cancel() {
    this.ref.close();
  }

  submit() {
    this.inputObject.markAllAsTouched();
    if (this.inputObject.valid) {
      this.loading = true;
      if (this.inputObject.get('parentId').value == null) {
        this.inputObject.get('parentId').setValue(0);
      }
      if (this.data == null) {
        this.objectsService.insert(this.inputObject.value).subscribe(
          (value) => this.ref.close(value),
          (error) => {
            this.toastr.danger(error.error.title, this.translate.instant('user.title_notification'));
            this.loading = false;
          },
          () => this.loading = false,
        );
      } else {
        this.objectsService.update(this.inputObject.value).subscribe(
          (value) => this.ref.close(value),
          (error) => {
            this.toastr.danger(error.error.title, this.translate.instant('user.title_notification'));
            this.loading = false;
          },
          () => this.loading = false,
        );
      }
    } else {
    }
  }
}