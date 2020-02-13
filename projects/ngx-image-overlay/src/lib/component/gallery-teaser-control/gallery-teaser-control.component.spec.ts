import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTeaserControlComponent } from './gallery-teaser-control.component';

describe('GalleryTeaserControlComponent', () => {
  let component: GalleryTeaserControlComponent;
  let fixture: ComponentFixture<GalleryTeaserControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTeaserControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTeaserControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
