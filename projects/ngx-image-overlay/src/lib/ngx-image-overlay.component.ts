import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-image-overlay',
  template: `
    <lib-gallery></lib-gallery>
  `,
  styleUrls: ['./assets/utilities.css']
})
export class NgxImageOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
