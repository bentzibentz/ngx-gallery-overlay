import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTeaserImageComponent } from './gallery-teaser-image.component';

describe('GalleryTeaserImageComponent', () => {
  let component: GalleryTeaserImageComponent;
  let fixture: ComponentFixture<GalleryTeaserImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTeaserImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTeaserImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
