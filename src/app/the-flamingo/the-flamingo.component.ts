import { Component, OnInit } from '@angular/core';
import {ImageService} from "../image.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Page} from "../page.type";
import {PageService} from "../page.service";

@Component({
  selector: 'app-the-flamingo',
  templateUrl: './the-flamingo.component.html',
  styleUrls: ['./the-flamingo.component.scss']
})
export class TheFlamingoComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  flamingoCoverImage;
  flamingoSideImage;
  page$: Observable<Page>;
  content;

  constructor(private _imageService:ImageService, private _pageService:PageService) { }

  ngOnInit(): void {
      this.flamingoCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg')

      this.flamingoSideImage = this._imageService.loadImage290x450('flamingo-about.jpg')
  }
  ngAfterContentInit(): void {

    // Get the Page
    this._pageService.getPage('about-the-flamingo')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((page: Page) => {

        this.content = page.content[0]['content'];
      });
  }
}
