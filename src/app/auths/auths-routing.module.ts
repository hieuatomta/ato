import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {
  NbAuthComponent,
} from '@nebular/auth';
import {LoginComponent} from './logins/login.component';
import {AuthsComponent} from "./auths.component";

const routes: Routes = [
  {
    path: '',
    component: AuthsComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthsRoutingModule {
}
