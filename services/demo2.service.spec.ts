import { TestBed } from '@angular/core/testing';

import { Demo2Service } from './demo2.service';

describe('Demo2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Demo2Service = TestBed.get(Demo2Service);
    expect(service).toBeTruthy();
  });
});
