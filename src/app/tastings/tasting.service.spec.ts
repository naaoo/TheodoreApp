import { TestBed } from '@angular/core/testing';

import { TastingService } from './tasting.service';

describe('TastingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TastingService = TestBed.get(TastingService);
    expect(service).toBeTruthy();
  });
});
