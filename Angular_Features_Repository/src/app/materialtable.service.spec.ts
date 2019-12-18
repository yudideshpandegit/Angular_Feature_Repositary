import { TestBed } from '@angular/core/testing';

import { MaterialtableService } from './materialtable.service';

describe('MaterialtableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialtableService = TestBed.get(MaterialtableService);
    expect(service).toBeTruthy();
  });
});
