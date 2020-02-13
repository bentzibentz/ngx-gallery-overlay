import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-gallery-teaser-image',
  templateUrl: './gallery-teaser-image.component.html',
  styleUrls: ['./gallery-teaser-image.component.css']
})
export class GalleryTeaserImageComponent implements OnInit {

  // TODO define thumbnail interface
  @Input() thumbnail: any;

  constructor() { }

  ngOnInit(): void {
  }

}
