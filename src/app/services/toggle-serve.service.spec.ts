import { TestBed } from '@angular/core/testing';

import { ToggleServeService } from './toggle-serve.service';

describe('ToggleServeService', () => {
  let service: ToggleServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
