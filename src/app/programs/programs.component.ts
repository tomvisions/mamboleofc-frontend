import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";
import {Subject, takeUntil} from "rxjs";
import {Page} from "../page.type";
import {PageService} from "../page.service";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  programsCoverImage;
  programSide1Image;
  programSide2Image;
  programSide3Image;
  content1;
  content2;
  content3;


  constructor(private _imageService:ImageService, private _pageService: PageService) { }

  ngOnInit(): void {
    this.programsCoverImage = this._imageService.loadImage1920x940('program.jpeg');
    this.programSide1Image = this._imageService.loadImage500x251('program-side-1.jpg');
    this.programSide2Image = this._imageService.loadImage500x500('program-side-2.jpg');
    this.programSide3Image = this._imageService.loadImage500x500('program-side-3.jpg');

  }

  ngAfterContentInit(): void {

    // Get the Page
    this._pageService.getPage('the-programs')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((page: Page) => {

        this.content1 = page.content[0]['content'];
        this.content2 = page.content[1]['content'];
        this.content3 = page.content[2]['content'];

      });
  }

}
