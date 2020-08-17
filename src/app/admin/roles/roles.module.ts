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

import { RolesRoutingModule, routedComponents } from './roles-routing.module';
import {RoleComponent} from './role/role.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormsModule as ngFormsModule} from '@angular/forms';


const components = [
  RoleComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    RolesRoutingModule,
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
  declarations: [...routedComponents, RoleComponent],
})
export class RolesModule {}
