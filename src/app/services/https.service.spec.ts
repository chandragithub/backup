import { TestBed, inject } from '@angular/core/testing';

import { HttpsService } from './https.service';

describe('HttpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpsService]
    });
  });

  it('should be created', inject([HttpsService], (service: HttpsService) => {
    expect(service).toBeTruthy();
  }));
});
