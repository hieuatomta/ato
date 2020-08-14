import {Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from '../../../@core/mock/toastr-service';
import {SmartTableData} from '../../../@core/data/smart-table';
import {DatePipe} from '@angular/common';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-users',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  constructor(private http: HttpClient,
              private toastr: ToastrService,
              private service: SmartTableData) {

  }
  selectedItem = '2';
  myFunction(event) {
    this.toastr.showToast('primary', 'title', 'body');
    // console.log(event);
    switch (event.action) {
      case 'Edit':
        // console.log('edit');
        // this.viewRecord(event.data);
        break;
      case 'Delete':
        // console.log('de');
      // this.editRecord(event.data);
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
      username: {
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
      date: {
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
      },
    },
    'width': '600px',
  };

  source = [
    // {
    //   id: 1,
    //   name: "Leanne Graham",
    //   username: "Bret",
    //   email: "Sincere@april.biz",
    //   date: new Date(),
    //   phone: '098152773',
    //   role: ['admin', 'user'],
    //   status: 'Hoạt động',
    // },
    // {
    //   id: 2,
    //   name: "Ervin Howell",
    //   username: "Antonette",
    //   email: "Shanna@melissa.tv",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    //
    // {
    //   id: 3,
    //   name: "Nicholas DuBuque",
    //   username: "Nicholas.Stanton",
    //   email: "Rey.Padberg@rosamond.biz",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    // {
    //   id: 4,
    //   name: "Leanne Graham",
    //   username: "Bret",
    //   email: "Sincere@april.biz",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    // {
    //   id: 5,
    //   name: "Ervin Howell",
    //   username: "Antonette",
    //   email: "Shanna@melissa.tv",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    //
    // {
    //   id: 6,
    //   name: "Nicholas DuBuque",
    //   username: "Nicholas.Stanton",
    //   email: "Rey.Padberg@rosamond.biz",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    // {
    //   id: 7,
    //   name: "Leanne Graham",
    //   username: "Bret",
    //   email: "Sincere@april.biz",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    // {
    //   id: 8,
    //   name: "Ervin Howell",
    //   username: "Antonette",
    //   email: "Shanna@melissa.tv",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    //
    // {
    //   id: 9,
    //   name: "Nicholas DuBuque",
    //   username: "Nicholas.Stanton",
    //   email: "Rey.Padberg@rosamond.biz",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    // {
    //   id: 10,
    //   name: "Leanne Graham",
    //   username: "Bret",
    //   email: "Sincere@april.biz",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    // {
    //   id: 11,
    //   name: "Ervin Howell",
    //   username: "Antonette",
    //   email: "Shanna@melissa.tv",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
    //
    // {
    //   id: 12,
    //   name: "Nicholas DuBuque",
    //   username: "Nicholas.Stanton",
    //   email: "Rey.Padberg@rosamond.biz",
    //   phone: '098152773',
    //   role: 'admin',
    //   status: 'Hoạt động',
    // },
  ];

}

export interface IPaging {
  page: number;
  perPage: number;
}
