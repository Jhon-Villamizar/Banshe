import { TestBed } from '@angular/core/testing';

import { ConutryService } from './conutry.service';

describe('ConutryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConutryService = TestBed.get(ConutryService);
    expect(service).toBeTruthy();
  });
});
