import { Component, OnInit } from '@angular/core';

// import { MENU_ITEMS } from './pages-menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-auths',
  template: `
    <ngx-two-columns-layout>
      <router-outlet></router-outlet>
      </ngx-two-columns-layout>
  `,
})
export class AuthsComponent  {
}

