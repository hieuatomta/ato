import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {ToastrService} from '../../../@core/mock/toastr-service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserUpdateComponent} from './user-update/user-update.component';
import {TranslateService} from '@ngx-translate/core';
import {UsersService} from '../../../@core/services/users.service';
import {HttpHeaders} from '@angular/common/http';
import {ConfirmDialogComponent} from '../../../shares/directives/confirm-dialog/confirm-dialog.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-users',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {
    this.search(0);
  }

  constructor(
    private toastr: ToastrService,
    private translate: TranslateService,
    private toastrService: NbToastrService,
    private userService: UsersService,
    private dialogService: NbDialogService) {
  }

  loading = false;

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
    {name: 'users.item_email', prop: 'mail', flexGrow: 1},
    {name: 'users.item_tel', prop: 'phone', flexGrow: 1},
    {name: 'users.item_status', prop: 'status', flexGrow: 1},
    {name: 'users.item_action', prop: 'action_btn', flexGrow: 1}
  ];

  inputForm = new FormGroup({
    name: new FormControl(null, []),
    fullname: new FormControl(null, []),
    mail: new FormControl(null, []),
    phone: new FormControl(null, []),
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
    }).onClose.subscribe(
      value => {
        if (value) {
          if (data == null) {
            this.toastrService.success(this.translate.instant('users.content_add_success'),
              this.translate.instant('users.title_notification'));
          } else {
            this.toastrService.success(this.translate.instant('users.content_edit_success'),
              this.translate.instant('users.title_notification'));
          }
          this.search(0);
        }
      }
    );
  }

  protected onSuccess(data: any | null, headers: HttpHeaders, page: number): void {
    this.page.count = data.totalPages;
    this.page.offset = page || 0;
    this.rows = data.list || [];
  }

  search(pageToLoad: number) {
    this.loading = true;
    this.page.offset = pageToLoad;
    this.userService.doSearch({
      page: this.page.offset,
      size: this.page.limit
    }, this.inputForm.value).subscribe(
      (res) => {
        this.onSuccess(res.body.data, res.headers, pageToLoad);
      },
      (error) => {
        this.loading = false;
      },
      () => this.loading = false,
    );
  }


  deleteUsers(data) {
    this.dialogService.open(ConfirmDialogComponent, {
      context: {
        message: this.translate.instant('users.title_delete') + ' ' + data.fullname
      }
    }).onClose.subscribe(res => {
        if (res) {
          this.userService.delete(data).subscribe(
            () => {
              this.toastrService.success(this.translate.instant('users.content_delete_success'),
                this.translate.instant('users.title_notification'));
              this.search(0);
            },
            (error) => {
              if (error.error?.title) {
                this.toastrService.danger(error.error.title,
                  this.translate.instant('users.title_notification'));
              } else {
                this.toastrService.danger(this.translate.instant('module.unknown_error'),
                  this.translate.instant('users.title_notification'));
              }
            }
          );
        }
      }
    );
  }
}
