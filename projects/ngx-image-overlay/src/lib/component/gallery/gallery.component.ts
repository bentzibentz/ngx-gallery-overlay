import { Component, Input, OnInit } from '@angular/core';
import { Thumbnail } from '../../interfaces/thumbnail';
import { Meta } from '../../interfaces/meta';
import { Gallery } from '../../interfaces/gallery';

@Component({
  selector: 'lib-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() thumbnail: Thumbnail;
  @Input() meta: Meta;
  @Input() gallery: Gallery;

  constructor() { }

  ngOnInit(): void {
  }

}
