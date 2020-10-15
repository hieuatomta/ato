import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClientComponent} from './client.component';
import {LoginComponent} from '../auths/logins/login.component';
import {ChangePassEmailComponent} from '../auths/changePassEmail/changePassEmail.component';
import {HomeClientComponent} from './home_client/home-client.component';
import {ShopingCartComponent} from './shoping-cart/shoping-cart.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';


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
        path: 'thanh-toan',
        component: ShopingCartComponent,
      },
      {
        path: 've-chung-toi',
        component: AboutComponent,
      },
      {
        path: 'lien-he',
        component: ContactComponent,
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
