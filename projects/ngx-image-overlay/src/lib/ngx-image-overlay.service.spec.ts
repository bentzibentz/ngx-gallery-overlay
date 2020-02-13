import { TestBed } from '@angular/core/testing';

import { NgxImageOverlayService } from './ngx-image-overlay.service';

describe('NgxImageOverlayService', () => {
  let service: NgxImageOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
