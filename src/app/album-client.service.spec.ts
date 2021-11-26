import { TestBed } from '@angular/core/testing';

import { AlbumClientService } from './album-client.service';

describe('AlbumClientService', () => {
  let service: AlbumClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
