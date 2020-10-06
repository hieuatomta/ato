import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbButtonModule,
  NbCalendarKitModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTooltipModule
} from '@nebular/theme';
import {NgSelectModule} from '@ng-select/ng-select';
import {InlineMessageComponent} from './directives/inline-message/inline-message.component';
import {TranslateModule} from '@ngx-translate/core';
import {ScrollbarHelper} from '@swimlane/ngx-datatable';
import {ConfirmDialogComponent} from './directives/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [InlineMessageComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbCardModule,
    NgSelectModule,
    NbButtonModule,
    TranslateModule,
    NbIconModule,
    ReactiveFormsModule,
    NbCalendarKitModule,
    NbTooltipModule
  ],
  exports: [
    InlineMessageComponent, ConfirmDialogComponent
  ],
  providers: [
    ScrollbarHelper
  ]
})
export class SharedModule {
}
