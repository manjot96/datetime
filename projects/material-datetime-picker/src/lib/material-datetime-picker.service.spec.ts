import { TestBed, inject } from '@angular/core/testing';

import { MaterialDatetimePickerService } from './material-datetime-picker.service';

describe('MaterialDatetimePickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialDatetimePickerService]
    });
  });

  it('should be created', inject([MaterialDatetimePickerService], (service: MaterialDatetimePickerService) => {
    expect(service).toBeTruthy();
  }));
});
