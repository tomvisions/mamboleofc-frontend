import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-the-flamingo',
  templateUrl: './the-flamingo.component.html',
  styleUrls: ['./the-flamingo.component.scss']
})
export class TheFlamingoComponent implements OnInit {
  flamingoCoverImage;
  flamingoSideImage;

  constructor(private _imageService:ImageService) { }

  ngOnInit(): void {
      this.flamingoCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg')

      this.flamingoSideImage = this._imageService.loadImage290x450('flamingo-about.jpg')
  }

}
