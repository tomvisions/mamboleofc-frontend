import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lightbox:any;

  constructor() { }

  ngOnInit(): void {
    //lightbox settings
    this.lightbox = GLightbox({
      'href': 'https://tomvisions-images.s3.amazonaws.com/mamboleofc/mamboleo-fc.mp4',
      'type': 'video',
      'source': 'local', //vimeo, youtube or local
      'width': 900,
      'autoplayVideos': true,
    });
  }

}
