import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-gallery-copyright',
  templateUrl: './gallery-copyright.component.html',
  styleUrls: ['./gallery-copyright.component.css']
})
export class GalleryCopyrightComponent implements OnInit {

  @Input() copyright: string;

  constructor() { }

  ngOnInit(): void {
  }

}
