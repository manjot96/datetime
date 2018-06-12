import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDatetimePickerComponent } from './material-datetime-picker.component';

describe('MaterialDatetimePickerComponent', () => {
  let component: MaterialDatetimePickerComponent;
  let fixture: ComponentFixture<MaterialDatetimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDatetimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
