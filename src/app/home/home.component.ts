import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
import {ImageService} from "../image.service";

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

  constructor(private _imageService:ImageService) { }

  ngOnInit(): void {

    this.whoWeAreImageDesktop = this._imageService.loadImage1920x940('who-we-are-home-nov20.jpeg');
    this.upcomingEventsHomeImageDesktop = this._imageService.loadImage1920x940('upcoming-events-home.jpg');
    this.partnerWithUsHomeImageDesktop = this._imageService.loadImage1920x940('partner-with-us-home.jpg');
    this.followUsHomeImageDesktop = this._imageService.loadImage1920x940('follow-us-home.jpg');

    this.whoWeAreImageMobile = this._imageService.loadImage270x270('who-we-are-home-nov20.jpeg');
    this.upcomingEventsHomeImageMobile = this._imageService.loadImage270x270('upcoming-events-home.jpg');
    this.partnerWithUsHomeImageMobile = this._imageService.loadImage270x270('partner-with-us-home.jpg');
    this.followUsHomeImageMobile = this._imageService.loadImage270x270('follow-us-home.jpg');

    this.charlesVideoScreenImage = this._imageService.loadImage400('charles-video-screen.png');


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
