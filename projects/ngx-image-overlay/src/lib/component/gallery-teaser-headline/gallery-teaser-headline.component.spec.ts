import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTeaserHeadlineComponent } from './gallery-teaser-headline.component';

describe('GalleryTeaserHeadlineComponent', () => {
  let component: GalleryTeaserHeadlineComponent;
  let fixture: ComponentFixture<GalleryTeaserHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTeaserHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTeaserHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
