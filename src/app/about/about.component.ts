import {Component, OnInit} from '@angular/core';
import {ImageService} from "../image.service";
import {Meta} from "@angular/platform-browser";
import {PageService} from "../page.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Event} from "../event/event.type";
import {Page} from "../page.type";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  aboutCoverImage;
  aboutSideImage;
  page$: Observable<Page>;
  content;

  constructor(private _imageService: ImageService, private _metaTagService: Meta, private _pageService: PageService) {
  }

  ngOnInit(): void {
    this.aboutCoverImage = this._imageService.loadImage1920x940('who-we-are-home.jpg');
    this.aboutSideImage = this._imageService.loadImage450x450('about-side-image.jpg');

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'About MamboleoFC, soccer training',
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Tom Cruickshank'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD'},
      {charset: 'UTF-8'},
    ]);
  }


  ngAfterContentInit(): void {

    // Get the Page
    this._pageService.getPage('about-index')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((page: Page) => {
        this.content = page.content[0]['content'];
      });
  }

}
