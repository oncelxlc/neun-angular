import { TestBed } from '@angular/core/testing';

import { NgNeunService } from './ng-neun.service';

describe('NgNeunService', () => {
  let service: NgNeunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNeunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
