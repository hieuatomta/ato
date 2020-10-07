import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastrService} from '../../../../@core/mock/toastr-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RolesService} from '../../../../@core/services/roles.service';
import {UsersService} from '../../../../@core/services/users.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-user-update',
  styleUrls: ['./user-update.component.scss'],
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  listRole = null;
  lstRole = [];
  listStatus = [
    {name: 'common.status.1', code: 1},
    {name: 'common.status.0', code: 0}
  ];
  inputUser: any;
  itemRoles: any;
  loading = false;
  title: string;
  data: any;

  ngOnInit(): void {
    this.listRole = this.data?.roleUser?.split(',').map(item => Number(item));
    this.inputUser = new FormGroup({
      name: new FormControl(this.data?.name, [Validators.required]),
      fullname: new FormControl(this.data?.fullname, [Validators.required]),
      phone: new FormControl(this.data?.phone, []),
      mail: new FormControl(this.data?.mail, []),
      pass: new FormControl('', []),
      rePassword: new FormControl('', []),
      imageUrl: new FormControl(this.data?.imageUrl, []),
      orBirthUser: new FormControl(this.data?.orBirthUser, []),
      status: new FormControl(this.data?.status, [Validators.required]),
      lstRole: new FormControl(this.listRole, []),
    });
    this.inputUser.get('status').setValue(true);
    if (this.data) {
      this.inputUser.patchValue(this.data);
      const status = this.data.status === 1 ? true : false;
      this.inputUser.get('status').patchValue(status);
    };
    this.rolesService.doSearch({
      page: 0,
      size: 100
    }, {}).subscribe(res => {
      this.lstRole = res.body.data.list;
    }, err => {
      console.log(err);
    });
  };


  constructor(
    private toastr: ToastrService,
    public ref: NbDialogRef<UserUpdateComponent>,
    private rolesService: RolesService,
    private userService: UsersService,
    private dialogService: NbDialogService) {
  }


  submit() {
    this.inputUser.markAllAsTouched();
    if (this.inputUser.valid) {
      this.loading = true;
      const data = Object.assign({}, this.inputUser.value);
      data.id = this.data?.id;
      if (data?.roleId != null) {
        data.roleId = data?.roleId.toString();
      } else {
        data.roleId = null;
      }
      if (this.data == null) {
        this.userService.insert(data).subscribe(
          (value) => this.ref.close(value),
          error => {
          },
          () => this.loading = false,
        );
      } else {
        this.userService.update(data).subscribe(
          (value) => this.ref.close(value),
          (error) => {
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
