import { Component, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';

@Component({
  selector: 'lib-material-datetime-picker',
  template: `
    <p>
      material-datetime-picker works!
    </p>
  `,
  styles: [],
  providers: [
    {
      provide:     NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaterialDatetimePickerComponent),
      multi:       true
    },
    {
      provide:  DateAdapter,
      useClass: MomentDateAdapter,
      deps:     [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'LL',
        },
        display: {
          dateInput: 'LL',
          monthYearLabel: 'MMMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      }
    }
  ]
})
export class MaterialDatetimePickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public  formGroup:  FormGroup;
  public  timePicker: FormControl;
  public  datePicker: FormControl;
  public  times:      string[];

  private destroyed:  Subject<void>;

  private readonly TIME_FORMAT;
  private readonly DATE_FORMAT;
  private isDisabled: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.times     = [];

    this.destroyed = new Subject<void>();
    this.TIME_FORMAT = 'h:mm A';
    this.DATE_FORMAT = 'MMMM D, YYYY';
  }

  // Function to call when the rating changes.
  _onChange = (_: any) => {};

  // Function to call when the input is touched (when a star is clicked).
  _onTouched = () => {};

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
