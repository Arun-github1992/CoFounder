import { TestBed, inject } from '@angular/core/testing';

import { FormServicesService } from './form-services.service';

describe('FormServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormServicesService]
    });
  });

  it('should be created', inject([FormServicesService], (service: FormServicesService) => {
    expect(service).toBeTruthy();
  }));
});
