import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbCheckboxModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbOptionModule, NbRadioModule,
  NbSelectModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { UsersRoutingModule, routedComponents } from './users-routing.module';
import {UserComponent} from './user/user.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormsModule as ngFormsModule} from '@angular/forms';


const components = [
  UserComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule,
    NbFormFieldModule,
  ],
  declarations: [...routedComponents, UserComponent],
})
export class UsersModule {}
