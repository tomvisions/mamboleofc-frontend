import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-missios-visions-values',
  templateUrl: './missios-visions-values.component.html',
  styleUrls: ['./missios-visions-values.component.scss']
})
export class MissiosVisionsValuesComponent implements OnInit {
  missionVisionsValuesCoverImage;

  constructor(private _imageService:ImageService) { }

  ngOnInit(): void {

    this.missionVisionsValuesCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
  }

}
