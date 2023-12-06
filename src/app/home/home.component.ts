import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
import {ImageService} from "../image.service";
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Slide } from './home.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lightbox:any;
  homeArray;
  constructor(private _imageService:ImageService, private _metaTagService: Meta) { }

  ngOnInit(): void {


    this.homeArray = [
      { // who we are
        imageDesktop: this._imageService.loadImage1920x940('who-we-are-home-nov20.jpeg'),
        imageMobile: this._imageService.loadImage270x270('who-we-are-home-nov20.jpeg'),
        title: "Welcome to our Soccer Club",
        message: "Mamboleo FC is a non-profit organization that brings together people from all walks of life through a shared love of the beautiful game of soccer. Our mission is to promote mental and physical health, community and culture through our soccer programs, events, fund-raising, and partnerships.",
        link: "/about",
        clickMore: "Read more"
      },
      { // charles video
        imageDesktop: this._imageService.loadImage1920x940('charles-video-screen.png'),
        imageMobile: this._imageService.loadImage270x270('charles-video-screen.png'),
        title: "Train with us",
        message: "",
        link: "#",
        clickMore: "Watch Video",
        class: "glightbox"
      },
      { // upcoming events
        imageDesktop: this._imageService.loadImage1920x940('upcoming-events-home.jpg'),
        imageMobile: this._imageService.loadImage270x270('upcoming-events-home.jpg'),
        title: "Upcoming Events",
        message: "Registration is now closed for the 2023 OG Charity Soccer Tournament. We'll see you all there!",
        link: "/events/og-charity-soccer-tournament",
        clickMore: "Learn more"
      },
      { // partner with us
        imageDesktop: this._imageService.loadImage1920x940('partner-with-us-home.jpg'),
        imageMobile: this._imageService.loadImage270x270('partner-with-us-home.jpg'),
        title: "Partner with us",
        message: "Mamboleo FC is dedicated to fostering connection and community through social events promoting sport, fitness, nature music and the arts. We partner with local businesses, organizations and artists to bring  unique events to the Ottawa community, our members and friends.",
        link: "/contact",
        clickMore: "Partner with us"
      },
      { // follow us home
        imageDesktop: this._imageService.loadImage1920x940('follow-us-home.jpg'),
        imageMobile: this._imageService.loadImage270x270('follow-us-home.jpg'),
        title: "Follow Us",
        message: "Join our social network for the latest news and events!!",
        link: "/contact",
        clickMore: "Get Social"
      }
    ]
 //   console.log(this.homeArray);

/*    this.whoWeAreImageDesktop = this._imageService.loadImage1920x940('who-we-are-home-nov20.jpeg');
    this.upcomingEventsHomeImageDesktop = this._imageService.loadImage1920x940('upcoming-events-home.jpg');
    this.partnerWithUsHomeImageDesktop = this._imageService.loadImage1920x940('partner-with-us-home.jpg');
    this.followUsHomeImageDesktop = this._imageService.loadImage1920x940('follow-us-home.jpg');

    this.whoWeAreImageMobile = this._imageService.loadImage270x270('who-we-are-home-nov20.jpeg');
    this.upcomingEventsHomeImageMobile = this._imageService.loadImage270x270('upcoming-events-home.jpg');
    this.partnerWithUsHomeImageMobile = this._imageService.loadImage270x270('partner-with-us-home.jpg');
    this.followUsHomeImageMobile = this._imageService.loadImage270x270('follow-us-home.jpg');

    this.charlesVideoScreenImage = this._imageService.loadImage1920x940('charles-video-screen.png');
    this.charlesVideoScreenImageMobile = this._imageService.loadImage270x270('charles-video-screen.png');

*/
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
