import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auths',
    loadChildren: () => import('./auths/auths.module')
      .then(m => m.AuthsModule),
  },
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  // { path: '**', redirectTo: 'admin' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
