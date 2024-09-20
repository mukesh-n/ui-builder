import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External */
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSlickgridModule } from 'angular-slickgrid';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* User Defined */
import { FooterComponent } from './components/footer/footer.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DateTimePickerComponent } from './dialogs/date-time-picker/date-time-picker.component';
import { MinCustomValidator } from './validators/min-custom.validator';
import { PatternCustomValidator } from './validators/pattern-custom-validator';

@NgModule({
  declarations: [FooterComponent, DateTimePickerComponent,MinCustomValidator,PatternCustomValidator],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    AngularSlickgridModule,
    ReactiveFormsModule,
    ScrollingModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    FooterComponent,
    NgSelectModule,
    FormsModule,
    AngularSlickgridModule,
    ReactiveFormsModule,
    ScrollingModule,
    DateTimePickerComponent,
    NgbModule,
    MinCustomValidator,
    PatternCustomValidator
  ],
})
export class SharedModule {}
