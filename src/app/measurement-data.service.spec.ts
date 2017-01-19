/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeasurementDataService } from './measurement-data.service';

describe('Service: MeasurementData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeasurementDataService]
    });
  });

  it('should ...', inject([MeasurementDataService], (service: MeasurementDataService) => {
    expect(service).toBeTruthy();
  }));
});
