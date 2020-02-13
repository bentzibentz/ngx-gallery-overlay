import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCopyrightComponent } from './gallery-copyright.component';

describe('GalleryCopyrightComponent', () => {
  let component: GalleryCopyrightComponent;
  let fixture: ComponentFixture<GalleryCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
