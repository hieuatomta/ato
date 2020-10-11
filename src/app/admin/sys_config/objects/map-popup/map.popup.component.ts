import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LayoutService} from '../../../../@core/utils';
import {NbDialogRef} from '@nebular/theme';
import {Router} from '@angular/router';
import {TreeviewConfig} from 'ngx-treeview';
import {BookService} from './book.service';

@Component({
  selector: 'ngx-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPopupComponent implements OnInit {
  loading = false;
  title: string;
  data: any;
  dataItems = [];
  isCollapse: boolean = false;
  treeViewConfig = TreeviewConfig.create({
    hasFilter: true,
    hasAllCheckBox: false,
    maxHeight: undefined,
    hasCollapseExpand: false,
  });
  values = [];

  constructor(private layoutService: LayoutService,
              private ref: NbDialogRef<MapPopupComponent>,
              private service: BookService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.dataItems = this.service.getBooks();
    // this.roleModuleService.getTreeByRoleId(this.data).subscribe(
    //   (value) => {
    //     this.dataItems = formatDataModule(value.body, 0);
    //   },
    //   (error) => {
    //     this.loading = false;
    //   },
    //   () => this.loading = false,
    // );
    this.layoutService.onCollapse.subscribe(value => this.isCollapse = value);
  }

  submit() {
    this.loading = true;
    const data = [];
    this.values.map(value => {
      const a = value.split('#');
      data.push({roleId: this.data.id, moduleCode: a[0], actionCode: a[1]});
    });
    // this.roleModuleService.updateRoleModule({
    //   roleId: this.data.id,
    //   list: data,
    // }).subscribe(
    //   (success) => {
    //   },
    //   (error) => {
    //     this.loading = false;
    //   },
    //   () => {
    //     this.loading = false;
    //     this.loginService.authenticationcate({}).subscribe(res => {
    //       if (res.status === 200) {
    //         const obj = res.body.listObjects;
    //         localStorage.setItem('objects', JSON.stringify(obj));
    //       }
    //     }, err => {
    //       localStorage.clear();
    //       this.router.navigate(['auths/login']);
    //     });
    //     this.ref.close('success');
    //   },
    // );
  }

  cancel() {
    this.ref.close();
  }

}
