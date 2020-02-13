import { NgModule } from '@angular/core';
import { NgxImageOverlayComponent } from './ngx-image-overlay.component';
import { GalleryTeaserComponent } from './component/gallery-teaser/gallery-teaser.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryCopyrightComponent } from './component/gallery-copyright/gallery-copyright.component';
import { GalleryTeaserImageComponent } from './component/gallery-teaser-image/gallery-teaser-image.component';
import { GalleryTeaserSubheadlineComponent } from './component/gallery-teaser-subheadline/gallery-teaser-subheadline.component';
import { GalleryTeaserHeadlineComponent } from './component/gallery-teaser-headline/gallery-teaser-headline.component';
import { GalleryTeaserControlComponent } from './component/gallery-teaser-control/gallery-teaser-control.component';



@NgModule({
  declarations: [
    NgxImageOverlayComponent,
    GalleryTeaserComponent,
    GalleryComponent,
    GalleryCopyrightComponent,
    GalleryTeaserImageComponent,
    GalleryTeaserSubheadlineComponent,
    GalleryTeaserHeadlineComponent,
    GalleryTeaserControlComponent
  ],
  imports: [
  ],
  exports: [NgxImageOverlayComponent]
})
export class NgxImageOverlayModule { }
