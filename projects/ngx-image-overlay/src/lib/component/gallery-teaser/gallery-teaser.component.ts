import { Component, Input, OnInit } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { Thumbnail } from '../../interfaces/thumbnail';
import { Meta } from '../../interfaces/meta';
import { FilePreviewOverlayService } from '../../services/file-preview-overlay.service';
import { FilePreviewOverlayRef } from '../../references/file-preview-overlay-ref';
import { Gallery } from '../../interfaces/gallery';

@Component({
  selector: 'lib-gallery-teaser',
  templateUrl: './gallery-teaser.component.html',
  styleUrls: [
    './gallery-teaser.component.css',
    '../../assets/utilities.css',
    '../../assets/background.css',
  ],
  providers: [FilePreviewOverlayService]
})
export class GalleryTeaserComponent implements OnInit {

  @Input() thumbnail: Thumbnail;
  @Input() meta: Meta;
  @Input() gallery: Gallery;

  public uuid: string;

  constructor(
    private previewDialog: FilePreviewOverlayService
  ) { }

  ngOnInit(): void {
    this.uuid = uuidv4();
  }

  openImageOverlay() {
    console.log('open image overlay');
    console.log(this.gallery);
    const dialogRef: FilePreviewOverlayRef = this.previewDialog.open(this.gallery);
  }

}
