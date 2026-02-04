import { TestBed } from '@angular/core/testing';

import { Prodservice } from './prodservice';

describe('Prodservice', () => {
  let service: Prodservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prodservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
