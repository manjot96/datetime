import { NgModule } from '@angular/core';
import { MaterialDatetimePickerComponent } from './material-datetime-picker.component';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, NativeDateModule, MatDatepickerModule, MAT_DATE_FORMATS, MatAutocompleteModule,
  MatButtonToggleModule,

  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NativeDateModule,

    MatAutocompleteModule,
    MatButtonToggleModule,

    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatNativeDateModule,
    TextFieldModule
  ],
  declarations: [MaterialDatetimePickerComponent],
  exports: [MaterialDatetimePickerComponent]
})
export class MaterialDatetimePickerModule { }
