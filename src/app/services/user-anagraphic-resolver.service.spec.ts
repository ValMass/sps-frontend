import { TestBed } from '@angular/core/testing';

import { UserAnagraphicResolverService } from './user-anagraphic-resolver.service';

describe('UserAnagraphicResolverService', () => {
  let service: UserAnagraphicResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAnagraphicResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
