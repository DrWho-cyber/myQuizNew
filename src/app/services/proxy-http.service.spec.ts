import { TestBed } from '@angular/core/testing';

import { ProxyHttpService } from './proxy-http.service';

describe('ProxyHttpService', () => {
  let service: ProxyHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
