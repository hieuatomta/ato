import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClientComponent} from './client.component';
import {LoginComponent} from '../auths/logins/login.component';
import {ChangePassEmailComponent} from '../auths/changePassEmail/changePassEmail.component';
import {HomeClientComponent} from './home_client/home-client.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'trang-chu',
        component: HomeClientComponent,
      },
      {
        path: '',
        redirectTo: 'trang-chu',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
