import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.scss']
})
export class FollowUsComponent implements OnInit {
  followUsCoverImage;
  constructor(private _imageService:ImageService) { }

  ngOnInit(): void {
    this.followUsCoverImage = this._imageService.loadImage1920x940('')
  }

}
