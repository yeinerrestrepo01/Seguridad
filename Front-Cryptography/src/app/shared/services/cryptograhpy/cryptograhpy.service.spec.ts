import { TestBed } from '@angular/core/testing';

import { CryptograhpyService } from './cryptograhpy.service';

describe('CryptograhpyService', () => {
  let service: CryptograhpyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptograhpyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
