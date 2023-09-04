import { TestBed } from '@angular/core/testing';

import { CrudBoloService } from './crud-bolo.service';

describe('CrudBoloService', () => {
  let service: CrudBoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudBoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
