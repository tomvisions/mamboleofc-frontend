import { Component, OnInit } from '@angular/core';
import {EventService} from "./event.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Event} from './event.type'
import {ImageService} from "../image.service";

@Component({
  selector: 'app-events',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  eventInfo: Event;
  event$: Observable<Event>;
  rightSideImagesArray: string[];
  rightSideImageSResizedArray: string[];
  name: string;
  bannerImage: string;
  contentImage: string;
  aboutImage: string;
  content: string;
  about: string;

  constructor(
    private _eventService: EventService,
    private _imageService: ImageService

  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.event$ = this._eventService.event$;

    // Get the teams
    this._eventService.event$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((event: Event) => {
      //  this.event = 'hello';
      //  this.event = event;
        //console.log(this.event);'

        this._imageService.setSitePrefix(false);
        this.bannerImage = this._imageService.loadImage1728x401(event.bannerImage);
        this.contentImage = this._imageService.loadImage450x450(event.contentImage);
        this.aboutImage = this._imageService.loadImage450x450(event.aboutImage);
        this.name = event.name
        this.content = event.content;
        this.about = event.about;

    //    this.rightSideImagesArray = event.rightSideImage;

      //  for (let rightSideImage of this.rightSideImagesArray) {
        //  this.rightSideImageSResizedArray.push(this._imageService.loadImage450x450(`event/${rightSideImage}`));
      //  }
       // this.eventInfo = event[0]['content'];
     //   console.log(eventInfo);
      });

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
