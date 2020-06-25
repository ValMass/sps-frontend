import { TestBed } from '@angular/core/testing';

import { RetriveLoggedUserService } from './retrive-logged-user.service';

describe('RetriveLoggedUserService', () => {
  let service: RetriveLoggedUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetriveLoggedUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
