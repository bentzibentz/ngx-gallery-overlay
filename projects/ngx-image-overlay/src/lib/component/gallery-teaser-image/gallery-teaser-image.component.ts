import { Component, Input, OnInit } from '@angular/core';
import { Thumbnail } from '../../interfaces/thumbnail';

@Component({
  selector: 'lib-gallery-teaser-image',
  templateUrl: './gallery-teaser-image.component.html',
  styleUrls: ['./gallery-teaser-image.component.css']
})
export class GalleryTeaserImageComponent implements OnInit {

  // TODO define thumbnail interface
  @Input() thumbnail: Thumbnail;

  constructor() { }

  ngOnInit(): void {
  }

}
