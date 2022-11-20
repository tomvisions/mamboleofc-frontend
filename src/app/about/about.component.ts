import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutCoverImage;
  aboutSideImage;

  constructor(private _imageService:ImageService) { }

  ngOnInit(): void {
    this.aboutCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
    this.aboutSideImage = this._imageService.loadImage450x450('about-side-image.jpg');

 //   https://tomvisions-images.s3-website-us-east-1.amazonaws.com/1920x400/mamboleofc/who-we-are-home.jpg'
  }

}
