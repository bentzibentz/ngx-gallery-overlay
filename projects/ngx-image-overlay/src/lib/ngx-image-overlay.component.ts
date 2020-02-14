import { Component, Input, OnInit } from '@angular/core';
import { Meta } from './interfaces/meta';
import { Thumbnail } from './interfaces/thumbnail';
import { Gallery } from './interfaces/gallery';

@Component({
  selector: 'lib-ngx-image-overlay',
  template: `
    <lib-gallery [thumbnail]="thumbnail" [meta]="meta" [gallery]="gallery"></lib-gallery>
  `,
  styleUrls: [
    './style.css'
  ]
})
export class NgxImageOverlayComponent implements OnInit {

  @Input() thumbnail: Thumbnail;
  @Input() meta: Meta;
  @Input() gallery: Gallery;

  constructor() { }

  ngOnInit(): void {
  }

}
