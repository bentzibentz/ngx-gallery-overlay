import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '../../interfaces/meta';

@Component({
  selector: 'lib-gallery-teaser-control',
  templateUrl: './gallery-teaser-control.component.html',
  styleUrls: [
    './gallery-teaser-control.component.css',
    '../../assets/utilities.css',
    '../../assets/background.css',
  ]
})
export class GalleryTeaserControlComponent implements OnInit {

  @Input() meta: Meta;

  constructor() { }

  ngOnInit(): void {
  }

}
