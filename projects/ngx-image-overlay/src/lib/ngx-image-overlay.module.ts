import { NgModule } from '@angular/core';
import { NgxImageOverlayComponent } from './ngx-image-overlay.component';
import { GalleryTeaserComponent } from './component/gallery-teaser/gallery-teaser.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryCopyrightComponent } from './component/gallery-copyright/gallery-copyright.component';
import { GalleryTeaserImageComponent } from './component/gallery-teaser-image/gallery-teaser-image.component';
import { GalleryTeaserControlComponent } from './component/gallery-teaser-control/gallery-teaser-control.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { GalleryOverlayComponent } from './component/gallery-overlay/gallery-overlay.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxImageOverlayComponent,
    GalleryTeaserComponent,
    GalleryComponent,
    GalleryCopyrightComponent,
    GalleryTeaserImageComponent,
    GalleryTeaserControlComponent,
    GalleryOverlayComponent
  ],
  imports: [
    OverlayModule,
    CommonModule
  ],
  exports: [NgxImageOverlayComponent]
})
export class NgxImageOverlayModule { }
