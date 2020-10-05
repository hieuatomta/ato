import {Component, ViewEncapsulation} from '@angular/core';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ToastrService} from '../../../@core/mock/toastr-service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserUpdateComponent} from './user-update/user-update.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-users',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  constructor(
    private toastr: ToastrService,
    private translate: TranslateService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService) {
  }

  listStatus = [
    {name: 'users.status.1', code: 1},
    {name: 'users.status.0', code: 0}
  ];
  rows: Object[];
  page = {
    limit: 5,
    count: 0,
    offset: 0,
  };
  columns = [
    {name: 'users.item_number', prop: 'index', flexGrow: 0.3},
    {name: 'users.item_username', prop: 'name', flexGrow: 1},
    {name: 'users.item_fullname', prop: 'fullname', flexGrow: 1},
    {name: 'users.item_email', prop: 'email', flexGrow: 1},
    {name: 'users.item_tel', prop: 'tel', flexGrow: 1},
    {name: 'users.item_status', prop: 'status', flexGrow: 1},
    {name: 'users.item_action', prop: 'action_btn', flexGrow: 1}
  ];

  inputForm = new FormGroup({
    name: new FormControl(null, []),
    fullname: new FormControl(null, []),
    tel: new FormControl(null, []),
    email: new FormControl(null, []),
    status: new FormControl(null, []),
  });

  pageCallback(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.page.offset = pageInfo.offset;
    this.search(pageInfo.offset);
  }

  editUsers(data) {
    let title;
    if (data == null) {
      title = this.translate.instant('users.title_add');
    } else {
      title = this.translate.instant('users.title_edit');
    }
    this.dialogService.open(UserUpdateComponent, {
      context: {
        title: title,
        data: data,
      },
      dialogClass: 'modal-full',
      hasScroll: true,
    }).onClose.subscribe(
      value => {
        if (value) {
          if (data == null) {
            this.toastrService.success(this.translate.instant('users.content_add_success'),
              this.translate.instant('users.title_notification'))
          } else {
            this.toastrService.success(this.translate.instant('users.content_edit_success'),
              this.translate.instant('users.title_notification'))
          }
          this.search(0);
        }
      }
    );
  }

  search(number: number) {

  }


}

export interface IPaging {
  page: number;
  perPage: number;
}
