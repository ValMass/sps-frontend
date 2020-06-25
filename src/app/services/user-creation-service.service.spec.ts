import { TestBed } from '@angular/core/testing';

import { UserCreationServiceService } from './user-creation-service.service';

describe('UserCreationServiceService', () => {
  let service: UserCreationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCreationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
