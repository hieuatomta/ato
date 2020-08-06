import {Component, OnInit} from '@angular/core';

// import { MENU_ITEMS } from './pages-menu';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  postId: any;
  postId1: any;

  constructor(private http: HttpClient) {

  }

  menu: any;

  ngOnInit(): void {

    this.menu = JSON.parse(localStorage.getItem('objects'));

  }

}

