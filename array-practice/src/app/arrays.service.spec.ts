import { TestBed } from '@angular/core/testing';

import { ArraysService } from './arrays.service';

describe('ArraysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArraysService = TestBed.get(ArraysService);
    expect(service).toBeTruthy();
  });
});
