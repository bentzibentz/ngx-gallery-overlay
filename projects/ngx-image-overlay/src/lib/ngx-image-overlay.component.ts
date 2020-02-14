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

  // TODO
  // Sprache dynamisch nach übergebener Sprache (de_DE/de_DE_formal , en_EN/en_UK/en_US , es_ES)
  // Anzahl der Bilder dynamisch im Button ausgeben
  // Gallery Bilder srcset
  // Gallery Bilder Titel einblenden
  // Farbendynamisch anpassbar machen, button, text, hintergrund
  // Weiter in Componenten zerlegen

}
