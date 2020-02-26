import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxImageOverlayComponent } from './ngx-image-overlay.component';
import { GalleryTeaserComponent } from './component/gallery-teaser/gallery-teaser.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryCopyrightComponent } from './component/gallery-copyright/gallery-copyright.component';
import { GalleryTeaserImageComponent } from './component/gallery-teaser-image/gallery-teaser-image.component';
import { GalleryTeaserControlComponent } from './component/gallery-teaser-control/gallery-teaser-control.component';
import { GalleryOverlayComponent } from './component/gallery-overlay/gallery-overlay.component';

import { OverlayModule } from '@angular/cdk/overlay';

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
    CommonModule,
    OverlayModule
  ],
  exports: [NgxImageOverlayComponent]
})
export class NgxImageOverlayModule { }
