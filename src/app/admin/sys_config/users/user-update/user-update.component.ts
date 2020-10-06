import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToastrService} from '../../../../@core/mock/toastr-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-user-update',
  styleUrls: ['./user-update.component.scss'],
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  ngOnInit(): void {
    this.inputUser = new FormGroup({
      name: new FormControl(this.data?.name, []),
      fullname: new FormControl(this.data?.fullname, []),
      phone: new FormControl(this.data?.phone, []),
      mail: new FormControl(this.data?.mail, []),
      pass: new FormControl('', []),
      rePassword: new FormControl('', []),
      imageUrl: new FormControl(this.data?.imageUrl, []),
      status: new FormControl(this.data?.status, []),
    });
    this.inputUser.get('status').setValue(true);
    if (this.data) {
      this.inputUser.patchValue(this.data);
      const editable = this.data.editable === 1 ? true : false;
      this.inputUser.get('editable').patchValue(editable);

      const status = this.data.status === 1 ? true : false;
      this.inputUser.get('status').patchValue(status);
    }
  };
  listStatus = [
    {name: 'users.status.1', code: 1},
    {name: 'users.status.0', code: 0}
  ];
  inputUser: any;

  constructor(
    private toastr: ToastrService,
    public ref: NbDialogRef<UserUpdateComponent>,
    private dialogService: NbDialogService) {
  }

  itemRoles: any;
  loading = false;
  title: string;
  data: any;

  submit() {

  }

  cancel() {
    this.ref.close();
  }
}

export interface IPaging {
  page: number;
  perPage: number;
}
