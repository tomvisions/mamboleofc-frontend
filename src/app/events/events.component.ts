import { Component, OnInit } from '@angular/core';
import {EventsService} from "./events.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Event} from './events.type'
import {ImageService} from "../image.service";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  events: Event[];
  events$: Observable<Event[]>;
  upcomingEventsHomeImage;
  contentImage;

  constructor(
    private _eventService: EventsService,
    private _imageService:ImageService,
    private _metaTagService: Meta
  ) { }

  ngAfterContentInit(): void {
    this.events$ = this._eventService.events$;

    // Get the teams
    this._eventService.events$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((events: Event[]) => {
        this.events = events;

        this._imageService.setSitePrefix(false)
        this.contentImage = this._imageService.loadImage200x200(events[0].contentImage);

      });
  }

  ngOnInit(): void {
    this._imageService.setSitePrefix(true)

    this.upcomingEventsHomeImage = this._imageService.loadImage200x200('upcoming-events-home.jpg');

    this._metaTagService.addTags([
      {
        name: 'keywords',
        content: 'MamboleoFC events, soccer training',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Tom Cruickshank' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
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
