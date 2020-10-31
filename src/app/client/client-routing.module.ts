import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClientComponent} from './client.component';
import {LoginComponent} from '../auths/logins/login.component';
import {ChangePassEmailComponent} from '../auths/changePassEmail/changePassEmail.component';
import {HomeClientComponent} from './home_client/home-client.component';
import {ShopingCartComponent} from './shoping-cart/shoping-cart.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductComponent} from './products/product.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'trang-chu.html',
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
        path: 'danh-sach-san-pham.html',
        component: ProductComponent,
      },
      {
        path: 'lien-he',
        component: ContactComponent,
      },
      {
        path: 'product-detail.html',
        component: ProductDetailComponent,
      },
      // {
      //   path: 'chi-tiet/:key',
      //   component: ProductDetailComponent,
      // },
      {
        path: '',
        redirectTo: 'trang-chu.html',
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
