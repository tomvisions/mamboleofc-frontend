import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programsCoverImage;
  programSide1Image;
  programSide2Image;
  programSide3Image;

  constructor(private _imageService:ImageService) { }

  ngOnInit(): void {
    this.programsCoverImage = this._imageService.loadImage1920x940('program.jpeg');
    this.programSide1Image = this._imageService.loadImage500x251('program-side-1.jpg');
    this.programSide2Image = this._imageService.loadImage500x500('program-side-2.jpg');
    this.programSide3Image = this._imageService.loadImage500x500('program-side-3.jpg');

  }

}
