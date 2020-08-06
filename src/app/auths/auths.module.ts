import { NgModule } from '@angular/core';
import {
  NbAlertModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AuthsRoutingModule } from './auths-routing.module';
import { LoginComponent } from './logins/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthsComponent} from './auths.component';

@NgModule({
  imports: [
    AuthsRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbAlertModule,
    FormsModule,
    NbInputModule,
    NbCheckboxModule,
    NbIconModule,
    ReactiveFormsModule,
    NbLayoutModule,
  ],
  declarations: [
    LoginComponent,
    AuthsComponent,
  ],
})
export class AuthsModule {
}
