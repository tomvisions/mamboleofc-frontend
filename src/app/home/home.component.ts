import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
import {ImageService} from "../image.service";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lightbox:any;
  whoWeAreImageDesktop;
  upcomingEventsHomeImageDesktop;
  partnerWithUsHomeImageDesktop;
  followUsHomeImageDesktop;
  whoWeAreImageMobile;
  upcomingEventsHomeImageMobile;
  partnerWithUsHomeImageMobile;
  followUsHomeImageMobile;
  charlesVideoScreenImage;
  charlesVideoScreenImageMobile;
  constructor(private _imageService:ImageService, private _metaTagService: Meta) { }

  ngOnInit(): void {
    this.whoWeAreImageDesktop = this._imageService.loadImage1920x940('who-we-are-home-nov20.jpeg');
    this.upcomingEventsHomeImageDesktop = this._imageService.loadImage1920x940('upcoming-events-home.jpg');
    this.partnerWithUsHomeImageDesktop = this._imageService.loadImage1920x940('partner-with-us-home.jpg');
    this.followUsHomeImageDesktop = this._imageService.loadImage1920x940('follow-us-home.jpg');

    this.whoWeAreImageMobile = this._imageService.loadImage270x270('who-we-are-home-nov20.jpeg');
    this.upcomingEventsHomeImageMobile = this._imageService.loadImage270x270('upcoming-events-home.jpg');
    this.partnerWithUsHomeImageMobile = this._imageService.loadImage270x270('partner-with-us-home.jpg');
    this.followUsHomeImageMobile = this._imageService.loadImage270x270('follow-us-home.jpg');

    this.charlesVideoScreenImage = this._imageService.loadImage1920x940('charles-video-screen.png');
    this.charlesVideoScreenImageMobile = this._imageService.loadImage270x270('charles-video-screen.png');


    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'MamboleoFC, MamboleoFC website, soccer training, inclusive community, soccer training indoors',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Tom Cruickshank' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);


    //lightbox settings
    this.lightbox = GLightbox({
      'href': 'https://media.mamboleofc.ca/mamboleo-fc.mp4',
      'type': 'video',
      'source': 'local', //vimeo, youtube or local
      'width': 900,
      'autoplayVideos': true,
    });
  }

}
