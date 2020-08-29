import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {HomeComponent} from './homes/home.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./demo/layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./demo/ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./demo/modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./demo/charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./admins/users/users.module')
        .then(m => m.UsersModule),
    },
    {
      path: 'roles',
      loadChildren: () => import('./admins/roles/roles.module')
        .then(m => m.RolesModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./demo/editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./homes/tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
