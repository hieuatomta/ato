import { NgModule } from '@angular/core';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbFormFieldModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { UsersComponent } from './users/users.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
    imports: [
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        FormsRoutingModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule,
        Ng2SmartTableModule,
        NbFormFieldModule,
    ],
  declarations: [
    FormsComponent,
    UsersComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
  ],
})
export class FormsModule { }
