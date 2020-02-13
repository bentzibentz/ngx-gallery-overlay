import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageOverlayComponent } from './ngx-image-overlay.component';

describe('NgxImageOverlayComponent', () => {
  let component: NgxImageOverlayComponent;
  let fixture: ComponentFixture<NgxImageOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
