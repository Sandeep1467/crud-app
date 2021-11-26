import { TestBed } from '@angular/core/testing';

import { PostClientService } from './post-client.service';

describe('PostClientService', () => {
  let service: PostClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
