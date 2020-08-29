import {Component, ViewEncapsulation} from '@angular/core';
import {ToastrService} from '../../../../@core/mock/toastr-service';
import {DatePipe} from '@angular/common';
import {RestApiService} from '../../../../@core/mock/rest-api.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-user',
  styleUrls: ['./role.component.scss'],
  templateUrl: './role.component.html',
})
export class RoleComponent {
  constructor(
    private toastr: ToastrService,
    private http: RestApiService) {
    this.http.post('http://localhost:8080/test3/searchUsers', {}).subscribe(res => {
      console.log(res.headers.get('Authorization'));
      if (res.status == 200) {
        console.log(res);
        this.source = res.body;
        localStorage.setItem('httpHeaders', res.headers.get('Authorization'));
      }
      // localStorage.setItem('httpHeaders', res.headers.get('Authorization'));
    }, err => {
      console.log(err);
      if (err.status == 400) {
        this.toastr.showToast('danger', 'lỗi', err.error);
        // console.log(res.status);
        window.location.href = err.error.data;
        localStorage.setItem('httpHeaders', '');
      }
    });
  }

  selectedItem = '2';

  myFunction(event) {
    this.toastr.showToast('primary', 'title', 'body');
    // console.log(event);
    switch (event.action) {
      case 'Edit':
        break;
      case 'Delete':
    }
  }

  settings = {
    actions:
      {
        columnTitle: 'Thao tác',
        custom: [
          {
            name: ' Edit',
            title: '<i class="ion-edit" style="color: blue" title="Sửa"></i>',
          },
          {
            name: 'Delete',
            title: '<i class="ion-android-delete" style="color: red" title="Xoá"></i>',
          },
        ],
        position: 'right',
        add: false,
        edit: false,
        delete: false,
        sort: false,
      },
    hideSubHeader: true,
    noDataMessage: `Không có kết quả tìm kiếm`,
    columns: {
      stt: {
        title: 'STT',
        type:
          'html',
        filter: false,
        class: 'wide',
        sortDirection: false,
        valuePrepareFunction: (value, row, cell) => {
          return cell.row.index + 1;
        },
        // valuePrepareFunction: (value, row, cell) => {
        //   const paging: IPaging = this.source.getPaging();
        //   const ret = (paging.page - 1) * paging.perPage + cell.row.index + 1;
        //   return ret;
        // },
      },
      userName: {
        title: 'Tên tài khoản',
        type:
          'string',
        sort: false,
      },
      email: {
        title: 'E-mail',
        type:
          'string',
        sort: false,
      },
      phone: {
        title: 'Số điện thoại',
        type:
          'string',
        sort: false,
      },
      userOfBirth: {
        title: 'Ngày sinh',
        type: Date,
        filter: false,
        valuePrepareFunction: (date: any) => {
          return new DatePipe('en-US').transform(date, 'dd/MM/yyyy');
        },
        sort: false,
      },
      role: {
        title: 'Quyền hạn',
        type:
          'array',
        valuePrepareFunction: (role: any) => {
          return role.toString();
        },
        sort: false,
      },
      status: {
        title: 'Trạng thái',
        type:
          'string',
        sort: false,
        valuePrepareFunction: (status: any) => {
          if (status === 1) {
            return 'Hoạt động';
          } else if (status === 0) {
            return 'Không Hoạt động';
          } else {
            return '';
          }
        },
      },
    },
    'width': '600px',
  };

  source = [];

}

export interface IPaging {
  page: number;
  perPage: number;
}
