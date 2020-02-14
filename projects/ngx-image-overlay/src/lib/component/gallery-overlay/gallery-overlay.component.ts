import { Component, Inject, OnInit } from '@angular/core';
import { FILE_PREVIEW_DIALOG_DATA } from '../../references/file-preview-overlay.tokens';
import { FilePreviewOverlayRef } from '../../references/file-preview-overlay-ref';

@Component({
  selector: 'lib-gallery-overlay',
  templateUrl: './gallery-overlay.component.html',
  styleUrls: [
    './gallery-overlay.component.css',
    '../../assets/utilities.css',
    '../../assets/background.css',
  ]
})
export class GalleryOverlayComponent implements OnInit {

  constructor(
    public dialogRef: FilePreviewOverlayRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA) public gallery: any
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
