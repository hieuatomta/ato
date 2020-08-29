import {Component, OnInit} from '@angular/core';

import {NbAccessChecker} from '@nebular/security';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  constructor(private accessChecker: NbAccessChecker) {

  }

  menu: Array<any>;
  home: Object;
  obj: any;

  ngOnInit(): void {
    this.menu = [];
    this.home = {
      title: 'Trang chủ',
      icon: 'home-outline',
      link: '/mic/pages/home',
    };
    this.menu.push(this.home);
    const menu1 = (JSON.parse(localStorage.getItem('objects')));
    for (let i = 0; i < menu1.length; i++) {
      this.menu.push(menu1[i]);
    }
    this.authMenuItems();
  }

  // phân quyền cho những menu quyền nào được hiện lên
  authMenuItems() {
    this.menu.forEach(item => {
      this.authMenuItem(item);
    });
  }

  authMenuItem(menuItem: NbMenuItem) {
    if (menuItem.data && menuItem.data['permission'] && menuItem.data['resource']) {
      this.accessChecker.isGranted(menuItem.data['permission'], menuItem.data['resource']).subscribe(granted => {
        menuItem.hidden = !granted;
      });
    } else {
      // sua true de an neu ko co quyen
      menuItem.hidden = false;
    }
    if (!menuItem.hidden && menuItem.children != null) {
      menuItem.children.forEach(item => {
        if (item.data && item.data['permission'] && item.data['resource']) {
          this.accessChecker.isGranted(item.data['permission'], item.data['resource']).subscribe(granted => {
            item.hidden = !granted;
          });
        } else {
          // if child item do not config any `data.permission` and `data.resource` just inherit parent item's config
          item.hidden = menuItem.hidden;
        }
      });
    }
  }
}

