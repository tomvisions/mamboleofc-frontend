import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";
import {Subject, takeUntil} from "rxjs";
import {Page} from "../page.type";
import {PageService} from "../page.service";

@Component({
  selector: 'app-missios-visions-values',
  templateUrl: './missios-visions-values.component.html',
  styleUrls: ['./missios-visions-values.component.scss']
})
export class MissiosVisionsValuesComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  missionVisionsValuesCoverImage;
  content;

  constructor(private _imageService:ImageService, private _pageService:PageService) { }

  ngOnInit(): void {

    this.missionVisionsValuesCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
  }


  ngAfterContentInit(): void {

    // Get the Page
    this._pageService.getPage('about-mission-vision-values')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((page: Page) => {

        this.content = page.content[0]['content'];
      });
  }
}
