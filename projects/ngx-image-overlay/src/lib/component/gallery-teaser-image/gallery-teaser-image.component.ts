import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Thumbnail } from '../../interfaces/thumbnail';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-gallery-teaser-image',
  templateUrl: './gallery-teaser-image.component.html',
  styleUrls: [
    './gallery-teaser-image.component.css',
    '../../assets/utilities.css',
    '../../assets/background.css',
  ]
})
export class GalleryTeaserImageComponent implements OnInit, AfterViewInit {

  @Input() thumbnail: Thumbnail;

  public src: string;
  public sizes: string;
  public srcSet: string;
  public title; string;
  public alt: string;

  constructor(
    public help: HelperService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // this.src = this.thumbnail.src;
    // this.title = this.thumbnail.title;
    // this.alt = this.thumbnail.alt;

    // this.srcSet = this.help.generateSrcSet(this.thumbnail.srcSet);
    // this.sizes = this.help.generateSrcSet(this.thumbnail.sizes);

    console.log(this.thumbnail);
    // console.log(this.srcSet);
    // console.log(this.src);
    // console.log(this.sizes);

  }

}
