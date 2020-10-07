import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastrService} from '../../../../@core/mock/toastr-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RolesService} from '../../../../@core/services/roles.service';
import {UsersService} from '../../../../@core/services/users.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-role-update',
  styleUrls: ['./role-update.component.scss'],
  templateUrl: './role-update.component.html',
})
export class RoleUpdateComponent implements OnInit {
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
    this.inputUser = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
      status: new FormControl(null, [Validators.required])
    });
    this.inputUser.get('status').setValue(true);
    if (this.data) {
      this.inputUser.patchValue(this.data);
      const status = this.data.status === 1 ? true : false;
      this.inputUser.get('status').patchValue(status);
    };
  };


  constructor(
    private toastr: ToastrService,
    public ref: NbDialogRef<RoleUpdateComponent>,
    private rolesService: RolesService) {
  }


  submit() {
  }

  cancel() {
    this.ref.close();
  }
}
