import { TestBed } from '@angular/core/testing';

import { LogInDomService } from './log-in-dom.service';

describe('LogInDomService', () => {
  let service: LogInDomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInDomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
