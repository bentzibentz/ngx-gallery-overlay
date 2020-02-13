import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTeaserSubheadlineComponent } from './gallery-teaser-subheadline.component';

describe('GalleryTeaserSubheadlineComponent', () => {
  let component: GalleryTeaserSubheadlineComponent;
  let fixture: ComponentFixture<GalleryTeaserSubheadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTeaserSubheadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTeaserSubheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
