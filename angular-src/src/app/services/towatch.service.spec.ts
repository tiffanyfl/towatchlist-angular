import { TestBed, inject } from '@angular/core/testing';

import { TowatchService } from './towatch.service';

describe('TowatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TowatchService]
    });
  });

  it('should be created', inject([TowatchService], (service: TowatchService) => {
    expect(service).toBeTruthy();
  }));
});
